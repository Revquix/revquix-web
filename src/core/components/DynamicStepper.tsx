'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@heroui/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface StepperStep {
  id: string;
  title: string;
  content: React.ReactNode;
  isValid?: boolean;
}

interface DynamicStepperProps {
  steps: StepperStep[];
  onStepChange?: (currentStep: number) => void;
  onComplete?: () => void;
  className?: string;
}

export const DynamicStepper: React.FC<DynamicStepperProps> = ({
  steps,
  onStepChange,
  onComplete,
  className = ''
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [isAnimating, setIsAnimating] = useState(false);
  const [previousStep, setPreviousStep] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const totalSteps = steps.length;
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  useEffect(() => {
    onStepChange?.(currentStep);
  }, [currentStep, onStepChange]);

  const animateToStep = (targetStep: number, animationDirection: 'forward' | 'backward') => {
    if (isAnimating || targetStep === currentStep) return;

    setPreviousStep(currentStep);
    setDirection(animationDirection);
    setIsAnimating(true);

    // Start the slide animation
    setTimeout(() => {
      setCurrentStep(targetStep);
    }, 50);

    // End animation after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 350);
  };

  const handleNext = () => {
    if (isLastStep) {
      onComplete?.();
      return;
    }
    animateToStep(currentStep + 1, 'forward');
  };

  const handlePrevious = () => {
    if (isFirstStep) return;
    animateToStep(currentStep - 1, 'backward');
  };

  const handleStepClick = (stepIndex: number) => {
    if (stepIndex === currentStep) return;
    const animationDirection = stepIndex > currentStep ? 'forward' : 'backward';
    animateToStep(stepIndex, animationDirection);
  };

  const handleKeyDown = (event: React.KeyboardEvent, stepIndex: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleStepClick(stepIndex);
    }
  };

  const getStepStatus = (stepIndex: number) => {
    if (stepIndex < currentStep) return 'completed';
    if (stepIndex === currentStep) return 'active';
    return 'pending';
  };

  const getStepClasses = (stepIndex: number) => {
    const status = getStepStatus(stepIndex);

    if (status === 'completed') {
      return 'bg-green-500 text-white';
    }
    if (status === 'active') {
      return 'bg-blue-500 text-white';
    }
    return 'bg-gray-200 text-gray-500 group-hover:bg-gray-300';
  };

  const getSlideTransform = (stepIndex: number) => {
    if (!isAnimating) {
      // Normal position when not animating
      return stepIndex === currentStep ? 'translate-x-0' :
             stepIndex < currentStep ? '-translate-x-full' : 'translate-x-full';
    }

    // During animation
    if (direction === 'forward') {
      if (stepIndex === previousStep) return '-translate-x-full'; // Current slide out left
      if (stepIndex === currentStep) return 'translate-x-0'; // New slide in from right
      if (stepIndex < previousStep) return '-translate-x-full'; // Already out left
      return 'translate-x-full'; // Still waiting on right
    } else {
      // backward
      if (stepIndex === previousStep) return 'translate-x-full'; // Current slide out right
      if (stepIndex === currentStep) return 'translate-x-0'; // New slide in from left
      if (stepIndex > previousStep) return 'translate-x-full'; // Already out right
      return '-translate-x-full'; // Still waiting on left
    }
  };

  return (
    <div className={`w-full h-full flex flex-col ${className}`}>
      {/* Progress Indicator - Compact Version */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <button
                type="button"
                className="flex flex-col items-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg p-1"
                onClick={() => handleStepClick(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-label={`Go to ${step.title} step`}
                tabIndex={0}
              >
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300
                    ${getStepClasses(index)}
                  `}
                >
                  {getStepStatus(index) === 'completed' ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <span className={`
                  mt-1 text-xs font-medium transition-colors duration-300 text-center max-w-[60px] leading-tight
                  ${getStepStatus(index) === 'active' ? 'text-blue-600' : 'text-gray-500'}
                `}>
                  {step.title}
                </span>
              </button>
              {index < totalSteps - 1 && (
                <div
                  className={`
                    flex-1 h-0.5 mx-2 transition-colors duration-300
                    ${index < currentStep ? 'bg-green-500' : 'bg-gray-200'}
                  `}
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Step Content - Advanced Sliding Animation */}
      <div className="relative overflow-hidden flex-1 min-h-[200px]" aria-live="polite">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`
              absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out
              ${getSlideTransform(index)}
            `}
            style={{
              opacity: index === currentStep || (isAnimating && (index === previousStep || index === currentStep)) ? 1 : 0,
              visibility: index === currentStep || (isAnimating && (index === previousStep || index === currentStep)) ? 'visible' : 'hidden'
            }}
          >
            <div className="p-3 bg-gray-50 rounded-lg h-full">
              <h3 className="text-base font-semibold mb-3 text-gray-800">
                {step.title}
              </h3>
              <div className="text-gray-700">
                {step.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Compact */}
      <div className="flex justify-between items-center mt-4">
        <Button
          variant="bordered"
          size="sm"
          isDisabled={isFirstStep || isAnimating}
          onPress={handlePrevious}
          startContent={<ChevronLeftIcon className="w-3 h-3" />}
          className="min-w-[80px] text-xs"
          aria-label="Go to previous step"
        >
          Previous
        </Button>

        <div className="text-xs text-gray-500" aria-live="polite">
          {currentStep + 1}/{totalSteps}
        </div>

        <Button
          color="primary"
          size="sm"
          isDisabled={isAnimating}
          onPress={handleNext}
          endContent={isLastStep ? null : <ChevronRightIcon className="w-3 h-3" />}
          className="min-w-[80px] text-xs"
          aria-label={isLastStep ? 'Complete registration' : 'Go to next step'}
        >
          {isLastStep ? 'Complete' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default DynamicStepper;
