import React from 'react';
import RegisterForm from "@/src/features/auth/components/register-form";
import Logo from "@/src/core/components/logo/logo";

// Validation schemas

const RegisterPage: React.FC = React.memo(() => {

    return (
        <div className="w-full flex flex-col">
            <div className="mb-6">
                <div className={"flex gap-1 items-center"}>
                    <Logo size={30} />
                    <h2 className={"text-2xl font-extrabold text-primary"}>Revquix</h2>
                </div>
            </div>

            <RegisterForm />
        </div>
    );
});

RegisterPage.displayName = 'RegisterPage';

export default RegisterPage;
