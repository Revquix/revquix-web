import { useAppSelector } from '@/src/core/hooks/redux-hooks';

/**
 * Custom hook to manage loader state
 */
export const useLoader = () => {
  const loaderState = useAppSelector((state) => state.loader);

  return {
    isLoading: loaderState.isLoading,
    isSpinner: loaderState.isSpinner,
    message: loaderState.message,
    blurOpacity: loaderState.blurOpacity,
    loadingProgress: loaderState.loadingProgress,
  };
};
