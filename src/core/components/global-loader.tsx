import React from 'react';
import { useLoader } from '@/src/core/hooks/useLoader';
import { Spinner } from '@heroui/spinner';
import { Progress } from '@heroui/progress';

/**
 * Simple global loader component that blocks user interactions during loading
 * Only dismissible through useLoaderActions, not user clicks
 */
export const GlobalLoader: React.FC = () => {
  const { isLoading, isSpinner, message, blurOpacity, loadingProgress } = useLoader();

  if (!isLoading) return null;

  // Calculate blur effect based on blurOpacity
  const blurStyle = blurOpacity > 0 ? `blur(${blurOpacity * 4}px)` : 'none';
  const backgroundOpacity = blurOpacity > 0 ? blurOpacity * 0.3 : 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-wait"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`,
        backdropFilter: blurStyle,
      }}
    >
      {/* Content container - only show if we have spinner, message, or progress */}
      {(isSpinner || message || typeof loadingProgress === 'number') && (
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Spinner - only show if isSpinner is true */}
          {isSpinner && (
            <Spinner size="lg" color="primary" />
          )}

          {/* Message - only show if message exists */}
          {message && (
            <p className="text-foreground text-center px-4 max-w-md">
              {message}
            </p>
          )}

          {/* Progress - only show if progress is a number */}
          {typeof loadingProgress === 'number' && (
            <Progress
              value={loadingProgress}
              className="w-full max-w-md"
              color="primary"
              showValueLabel
            />
          )}
        </div>
      )}
    </div>
  );
};
