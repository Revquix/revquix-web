import React from 'react';
import { useLoader } from '@/src/core/hooks/useLoader';
import { useAppDispatch } from '@/src/core/hooks/redux-hooks';
import { clearLoading } from '@/src/core/state/slice/loader-slice';
import { Spinner } from '@heroui/spinner';
import { Progress } from '@heroui/progress';

/**
 * Global loader component that shows loading state from Redux store
 */
export const GlobalLoader: React.FC = () => {
  const { isLoading, isSpinner, message, blurOpacity, loadingProgress } = useLoader();
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(clearLoading());
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  if (!isLoading) return null;

  // Calculate blur effect based on blurOpacity
  const blurStyle = blurOpacity > 0 ? `blur(${blurOpacity * 4}px)` : 'none';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${blurOpacity * 0.3})`, // Adjust background opacity based on blur
        backdropFilter: blurStyle,
      }}
      onClick={handleClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-label="Loading overlay"
      tabIndex={-1}
    >
      <div
        className="flex flex-col items-center justify-center p-8 gap-4 bg-background border border-default-200 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
        role="presentation"
      >
        {isSpinner && (
          <Spinner size="lg" color="primary" />
        )}

        {message && (
          <p className="text-default-600 text-center">
            {message}
          </p>
        )}

        {typeof loadingProgress === 'number' && (
          <Progress
            value={loadingProgress}
            className="w-full max-w-md"
            color="primary"
            showValueLabel
          />
        )}
      </div>
    </div>
  );
};
