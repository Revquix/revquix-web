import { useAppDispatch } from '@/src/core/hooks/redux-hooks';
import { initiateLoading, clearLoading, updateLoadingProgress, updateLoadingMessage, updateBlurOpacity } from '@/src/core/state/slice/loader-slice';

/**
 * Custom hook to provide convenient loader actions
 */
export const useLoaderActions = () => {
  const dispatch = useAppDispatch();

  const showLoader = ({
    isLoading = true,
    isSpinner = true,
    message,
    blurOpacity = 0.5,
    progress
  }: {
    isLoading?: boolean;
    isSpinner?: boolean;
    message?: string;
    blurOpacity?: number;
    progress?: number;
  } = {}) => {
    dispatch(initiateLoading({
      isLoading,
      isSpinner,
      message,
      blurOpacity,
      progress
    }));
  };

  const hideLoader = () => {
    dispatch(clearLoading());
  };

  const updateProgress = (progress: number) => {
    dispatch(updateLoadingProgress(progress));
  };

  const updateMessage = (message: string) => {
    dispatch(updateLoadingMessage(message));
  };

  const updateOpacity = (opacity: number) => {
    dispatch(updateBlurOpacity(opacity));
  };

  return {
    showLoader,
    hideLoader,
    updateProgress,
    updateMessage,
    updateOpacity
  };
};
