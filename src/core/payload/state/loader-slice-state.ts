export type LoaderSliceState = {
    isLoading: boolean;
    isSpinner: boolean;
    message?: string;
    blurOpacity: number; // 0-1 for blur opacity
    loadingProgress?: number; // 0-100 for progress bars
}