import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSliceState } from "@/src/core/payload/state/auth-slice-state";

const initialState: AuthSliceState = {
    accessToken: undefined,
    userId: undefined,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth-state',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<{
            accessToken?: string;
            userId: string;
        }>) => {
            state.accessToken = action.payload.accessToken;
            state.userId = action.payload.userId;
            state.isAuthenticated = true;
        },
        clearAuthData: (state) => {
            state.accessToken = undefined;
            state.userId = undefined;
            state.isAuthenticated = false;
        },
    },
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;
