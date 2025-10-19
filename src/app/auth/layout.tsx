'use client';

import React from 'react';
import {Card} from "@heroui/card";

const AuthLayout: React.FC<{children: React.ReactNode}> = ({children}) => {

    return (
        <main
            className="flex min-h-screen bg-primary items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/svg/auth-bg.svg')" }}
        >
            <Card className={"w-full max-w-[min(400px,95vw)] bg-white p-4 rounded-lg shadow-lg"}>
                {children}
            </Card>
        </main>
    );
};

export default AuthLayout;