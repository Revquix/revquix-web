import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Register | Revquix',
    description: 'Create your Revquix account to get started with our platform. Sign up today for free.',
    openGraph: {
        title: 'Register | Revquix',
        description: 'Create your Revquix account to get started with our platform. Sign up today for free.',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Register | Revquix',
        description: 'Create your Revquix account to get started with our platform. Sign up today for free.',
    },
};

const RegisterLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <>{children}</>
    );
};

export default RegisterLayout;