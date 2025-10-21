"use client";

import React, {useState, useTransition} from 'react';
import RegisterForm from "@/src/features/auth/components/register-form";
import Logo from "@/src/core/components/logo/logo";
import {Divider} from "@heroui/divider";
import Link from "next/link";
import {PATH_CONSTANTS} from "@/src/core/constants/path-constants";
import {useRouter} from "next/navigation";
import {useLink} from "@/src/core/hooks/useLink";

const RegisterPage: React.FC = React.memo(() => {

    const {handleLinkClick, isNavigating} = useLink();

    return (
        <React.Fragment>
            <RegisterForm/>

            <small className={"self-center text-center font-nunito text-gray-700 text-sm"}>
                Already have an account? <Link
                href={PATH_CONSTANTS.LOGIN}
                className={"text-blue-700 underline"}
                onClick={e => handleLinkClick(e, PATH_CONSTANTS.LOGIN)}
            >
                Login
                {isNavigating(PATH_CONSTANTS.LOGIN) && (
                    <span
                        className="ml-1 animate-spin inline-block w-3 h-3 border-2 border-blue-700 border-t-transparent rounded-full align-middle"/>
                )}
            </Link>
            </small>
        </React.Fragment>
    );
});

RegisterPage.displayName = 'RegisterPage';

export default RegisterPage;
