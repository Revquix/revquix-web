'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthController } from '@/src/core/controller/auth-controller';
import { setAuthData, clearAuthData } from '@/src/core/state/slice/auth-slice';
import LoaderPage from '@/src/core/components/loader-page';
import { AppDispatch } from '@/src/core/state/store';

const RefreshTokenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const refreshToken = async () => {
            try {
                const refreshTokenResponse = await AuthController.refreshToken();
                dispatch(setAuthData({
                    accessToken: refreshTokenResponse.accessToken,
                    userId: refreshTokenResponse.userId
                }));
            } catch (error) {
                dispatch(clearAuthData());
            } finally {
                setIsLoading(false);
            }
        };

        refreshToken();
    }, [dispatch]);

    if (isLoading) {
        return <LoaderPage />;
    }

    return <>{children}</>;
};

export default RefreshTokenProvider;