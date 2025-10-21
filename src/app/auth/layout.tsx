'use client';

import React from 'react';
import {Card} from "@heroui/card";
import Logo from "@/src/core/components/logo/logo";
import {Divider} from "@heroui/divider";
import {SERVICE_CONSTANTS} from "@/src/core/constants/service-constants";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {

    return (
        <main
            className="flex min-h-screen bg-primary items-center justify-center bg-cover bg-center light"
            style={{backgroundImage: "url('/svg/auth-bg.svg')"}}
        >
            <Card className={"w-full max-w-[min(400px,95vw)] bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4"}>
                <div className="flex flex-col gap-4">
                    <div className={"flex gap-1 items-center"}>
                        <Logo size={30}/>
                        <h2 className={"text-2xl font-extrabold text-primary"}>Revquix</h2>
                    </div>

                    <Divider/>
                </div>

                {children}

                <div className="flex justify-center items-center">
                    <small className="text-xs mx-auto text-muted">{SERVICE_CONSTANTS.COPYRIGHT_BASE_TEXT}</small>
                </div>
            </Card>
        </main>
    );
};

export default AuthLayout;