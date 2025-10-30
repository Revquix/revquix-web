import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Forgot Password | Revquix',
    description: 'Reset your Revquix account password to regain access to our platform.',
    keywords: [
        'forgot password',
        'Revquix',
        'password reset',
        'recover account',
        'reset password',
        'account recovery',
        'user access',
        'secure password',
        'platform',
        'Revquix forgot password',
        'user authentication',
        'password assistance',
        'password recovery',
        'Revquix dashboard',
        'account security',
        'user credentials',
        'email reset',
        'reset Revquix password',
        'Revquix password recovery',
        'forgot password form',
        'user password reset',
        'access Revquix',
        'Revquix platform password reset'
    ],
    openGraph: {
        title: 'Forgot Password | Revquix',
        description: 'Reset your Revquix account password to regain access to our platform.',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Forgot Password | Revquix',
        description: 'Reset your Revquix account password to regain access to our platform.',
    },
};

const ForgotPasswordLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <>{children}</>
    );
};

export default ForgotPasswordLayout;