import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoaderSliceState {
    isLoading: boolean;
    isSpinner: boolean;
    message?: string;
    blurOpacity: number; // 0-1 for blur opacity
    loadingProgress?: number; // 0-100 for progress bars
}

const initialState: LoaderSliceState = {
    isLoading: false,
    isSpinner: true,
    message: undefined,
    blurOpacity: 0.5,
    loadingProgress: undefined,
};

const loaderSlice = createSlice({
    name: 'loader-state',
    initialState,
    reducers: {
        initiateLoading: (state, action: PayloadAction<{
            isLoading: boolean;
            isSpinner?: boolean;
            message?: string;
            blurOpacity?: number;
            progress?: number
        }>) => {
            state.isLoading = action.payload.isLoading;
            if (action.payload.isSpinner !== undefined) {
                state.isSpinner = action.payload.isSpinner;
            }
            if (action.payload.message !== undefined) {
                state.message = action.payload.message;
            }
            if (action.payload.blurOpacity !== undefined) {
                state.blurOpacity = action.payload.blurOpacity;
            }
            if (action.payload.progress !== undefined) {
                state.loadingProgress = action.payload.progress;
            }
        },
        updateLoadingProgress: (state, action: PayloadAction<number>) => {
            state.loadingProgress = action.payload;
        },
        updateLoadingMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
        updateBlurOpacity: (state, action: PayloadAction<number>) => {
            state.blurOpacity = action.payload;
        },
        clearLoading: (state) => {
            state.isLoading = false;
            state.isSpinner = true;
            state.message = undefined;
            state.blurOpacity = 0.5;
            state.loadingProgress = undefined;
        }
    }
});

export const {
    initiateLoading,
    updateLoadingProgress,
    updateLoadingMessage,
    updateBlurOpacity,
    clearLoading
} = loaderSlice.actions;

export default loaderSlice.reducer;
