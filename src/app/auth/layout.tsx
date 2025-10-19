'use client';

import React from 'react';

const AuthLayout: React.FC<{children: React.ReactNode}> = ({children}) => {

    return (
        <main className="flex min-h-screen bg-amber-400 items-center justify-center">
            <div className={"w-full max-w-[min(400px,95vw)] bg-white min-h-[400px] p-4 rounded-lg shadow-lg"}>
                {children}
            </div>
        </main>
    );
};

export default AuthLayout;