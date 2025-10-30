'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AuthController } from '@/src/core/controller/auth-controller';
import { setAuthData, clearAuthData } from '@/src/core/state/slice/auth-slice';
import LoaderPage from '@/src/core/components/loader-page';
import { AppDispatch } from '@/src/core/state/store';
import {useAppDispatch} from "@/src/core/hooks/redux-hooks";

interface RefreshTokenProviderProps {
    children: React.ReactNode;
    maxRetries?: number;
    retryDelay?: number;
}

// Simple logger utility for production-ready logging
const logger = {
    error: (message: string, error?: any) => {
        if (process.env.NODE_ENV === 'development') {
            console.error(`[RefreshTokenProvider] ${message}`, error);
        }
    },
    warn: (message: string, data?: any) => {
        if (process.env.NODE_ENV === 'development') {
            console.warn(`[RefreshTokenProvider] ${message}`, data);
        }
    },
    info: (message: string, data?: any) => {
        if (process.env.NODE_ENV === 'development') {
            console.info(`[RefreshTokenProvider] ${message}`, data);
        }
    }
};

const RefreshTokenProvider: React.FC<RefreshTokenProviderProps> = ({
    children,
    maxRetries = 2,
    retryDelay = 1000
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useAppDispatch();
    const mountedRef = useRef(true);

    const sleep = useCallback((ms: number) => new Promise(resolve => setTimeout(resolve, ms)), []);

    const refreshToken = useCallback(async (attempt: number = 0): Promise<void> => {
        // Check if component is still mounted
        if (!mountedRef.current) return;

        try {
            logger.info(`Attempting to refresh token (attempt ${attempt + 1}/${maxRetries + 1})`);

            const refreshTokenResponse = await AuthController.refreshToken();

            // Validate response - if userId is missing, don't retry as it's likely a malformed response
            if (!refreshTokenResponse?.userId) {
                dispatch(clearAuthData());
                if (mountedRef.current) {
                    setIsLoading(false);
                }
                return;
            }

            // Only update state if component is still mounted
            if (mountedRef.current) {
                dispatch(setAuthData({
                    accessToken: refreshTokenResponse.accessToken,
                    userId: refreshTokenResponse.userId
                }));
                logger.info('Token refresh successful');
                setIsLoading(false);
            }
        } catch (error) {
            if (!mountedRef.current) return;

            // Retry logic for network errors or temporary failures
            if (attempt < maxRetries && isRetryableError(error)) {
                const delayMs = retryDelay * Math.pow(2, attempt); // Exponential backoff
                logger.info(`Retrying in ${delayMs}ms...`);
                await sleep(delayMs);
                return refreshToken(attempt + 1);
            }

            // All retries exhausted - clear auth and stop loading
            dispatch(clearAuthData());
            if (mountedRef.current) {
                setIsLoading(false);
            }
        }
    }, [dispatch, maxRetries, retryDelay, sleep]);

    // Check if error is retryable
    const isRetryableError = useCallback((error: any): boolean => {
        // Network errors, timeout errors, or 5xx server errors are retryable
        if (!error?.response) {
            logger.warn('Network error detected - will retry', { error: error.message });
            return true;
        }

        const status = error.response?.status;
        const isServerError = status >= 500 && status < 600;

        if (isServerError) {
            logger.warn(`Server error ${status} detected - will retry`, { status });
        }

        return isServerError;
    }, []);

    useEffect(() => {
        mountedRef.current = true;
        refreshToken();

        // Cleanup function
        return () => {
            mountedRef.current = false;
        };
    }, [refreshToken]);

    // Show loading state
    if (isLoading) {
        return <LoaderPage />;
    }

    // Show children even if refresh failed - let the app handle unauthenticated state
    return <>{children}</>;
};

export default RefreshTokenProvider;