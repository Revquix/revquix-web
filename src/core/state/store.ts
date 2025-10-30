import {configureStore, EnhancedStore} from "@reduxjs/toolkit";
import {ApplicationState} from "@/src/core/payload/state/application-state";
import loaderSlice from "@/src/core/state/slice/loader-slice";
import authSlice from "@/src/core/state/slice/auth-slice";

const store: EnhancedStore<ApplicationState> = configureStore({
    reducer: {
        loader: loaderSlice,
        auth: authSlice
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;