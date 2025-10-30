import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login | Revquix',
    description: 'Log in to your Revquix account to access our platform.',
    keywords: [
        'login',
        'Revquix',
        'sign in',
        'authentication',
        'user access',
        'account',
        'secure login',
        'platform',
        'dashboard',
        'Revquix login',
        'user authentication',
        'secure access',
        'login page',
        'Revquix dashboard',
        'account security',
        'user credentials',
        'password',
        'email login',
        'sign in to Revquix',
        'Revquix authentication',
        'login form',
        'user login',
        'access Revquix',
        'Revquix platform login'
    ],
    openGraph: {
        title: 'Login | Revquix',
        description: 'Log in to your Revquix account to access our platform.',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Login | Revquix',
        description: 'Log in to your Revquix account to access our platform.',
    },
};

const LoginLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <>{children}</>
    );
};

export default LoginLayout;