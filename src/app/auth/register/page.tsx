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

    return (
        <React.Fragment>

            <RegisterForm/>


        </React.Fragment>
    );
});

RegisterPage.displayName = 'RegisterPage';

export default RegisterPage;
