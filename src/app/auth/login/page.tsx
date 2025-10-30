"use client";

import React, {useMemo, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {Button, Input, InputOtp} from "@heroui/react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import Link from "next/link";
import {PATH_CONSTANTS} from "@/src/core/constants/path-constants";
import {useLink} from "@/src/core/hooks/useLink";
import OauthButtons from "@/src/core/components/buttons/oauth-buttons";
import TextDivider from "@/src/core/components/text-divider";
import {ChevronLeftIcon, EditIcon} from "@heroui/shared-icons";
import {Tooltip} from "@heroui/tooltip";
import {TokenRequest} from "@/src/core/payload/request/token-request";
import {useMutation} from "@tanstack/react-query";
import {ModuleResponse} from "@/src/core/payload/response/module-response";
import {AxiosError} from "axios";
import {RegisterRequest} from "@/src/core/payload/request/register-request";
import {AuthController} from "@/src/core/controller/auth-controller";
import {addToast} from "@heroui/toast";
import apiErrorWrapper from "@/src/core/utils/api-error-wrapper";
import {AuthResponse} from "@/src/core/payload/response/auth-response";
import {SERVICE_CONSTANTS} from "@/src/core/constants/service-constants";
import Lottie from "lottie-react";
import otpShieldLottie from "@/public/lottie/otp_shield.json";
import {maskEmail} from "@/src/core/utils/email-mask";
import {VerifyMfaRequest} from "@/src/core/payload/request/verify-mfa-request";
import {loginErrorHandler} from "@/src/features/auth/login-error-handler";
import {useRouter, useSearchParams} from "next/navigation";
import {useLoaderActions} from "@/src/core/hooks/useLoaderActions";
import {loginSuccessHandler} from "@/src/features/auth/login-success-handler";
import {useAppDispatch} from "@/src/core/hooks/redux-hooks";

const loginSchema = z.object({
    entrypoint: z
        .string()
        .min(1, 'Email or username is required')
        .refine((value) => {
            // Check if it's a valid email or a valid username (alphanumeric with optional underscores/hyphens)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const usernameRegex = /^[a-zA-Z0-9_-]{3,}$/;
            return emailRegex.test(value) || usernameRegex.test(value);
        }, 'Please enter a valid email address or username'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/\d/, 'Password must contain at least one number'),
});

const Login = () => {

    const [currentPage, setCurrentPage] = useState<1 | 2 | 3>(1);
    const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
    const {handleLinkClick, isNavigating} = useLink();
    const [otpValue, setOtpValue] = useState<string>('');
    const [authResponse, setAuthResponse] = useState<AuthResponse | null>(null);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const searchParams = useSearchParams();

    const loginForm = useForm<TokenRequest>({
        resolver: zodResolver(loginSchema),
        mode: 'onChange',
    });

    const isValidOtp = useMemo(() => {
        return otpValue.length === 4 && /^\d{4}$/.test(otpValue);
    }, [otpValue]);

    const handleBackClick = () => {
        setDirection('backward');
        setCurrentPage(currentPage - 1 as 1 | 2 | 3);
    }

    const goToPage = (page: 1 | 2 | 3) => {
        setDirection(page > currentPage ? 'forward' : 'backward');
        setCurrentPage(page);
    };

    const variants = {
        enter: (direction: 'forward' | 'backward') => ({
            x: direction === 'forward' ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: 'forward' | 'backward') => ({
            x: direction === 'forward' ? '-100%' : '100%',
            opacity: 0,
        }),
    };

    const handleTokenSuccess = (data: AuthResponse) => {
        if (data.tokenType === SERVICE_CONSTANTS.BEARER) {
            // save token to state
            addToast({
                classNames: {
                    base: "dark"
                },
                title: "Login Successful",
                description: "You have been logged in successfully.",
                color: "success"
            });
            loginSuccessHandler(
                data,
                router,
                dispatch,
                searchParams
            );
        } else {
            setAuthResponse(data);
            setDirection('forward');
            setCurrentPage(2);
        }
    }

    const tokenMutation = useMutation<AuthResponse, AxiosError, TokenRequest>({
        mutationFn: (data: TokenRequest) => AuthController.token(data),
        onSuccess: (data) => {
            handleTokenSuccess(data);
        },
        onError: (error: AxiosError) => {
            apiErrorWrapper(
                error,
                exceptionResponse => loginErrorHandler(exceptionResponse, router),
                error => addToast({
                    classNames: {
                        base: "dark"
                    },
                    title: "Server Error",
                    description: "An unexpected error occurred. Please try again later.",
                    color: "danger"
                })
            )
        },
    });

    const verifyMfaMutation = useMutation<AuthResponse, AxiosError, VerifyMfaRequest>({
        mutationFn: (data: VerifyMfaRequest) => AuthController.verifyMfa(data),
        onSuccess: (data) => {
            loginSuccessHandler(
                data,
                router,
                dispatch,
                searchParams
            );
        },
        onError: (error: AxiosError) => {
            apiErrorWrapper(
                error,
                exceptionResponse => addToast({
                    classNames: {
                        base: "dark"
                    },
                    title: "Login Failed",
                    description: exceptionResponse.message,
                    color: "danger"
                }),
                error => addToast({
                    classNames: {
                        base: "dark"
                    },
                    title: "Server Error",
                    description: "An unexpected error occurred. Please try again later.",
                    color: "danger"
                })
            )
        },
    });

    const handleLoginSubmit = (data: TokenRequest) => {
        tokenMutation.mutate(data);
    }

    const handleOtpSubmit = () => {
        const data: VerifyMfaRequest = {
            token: authResponse?.mfaToken ?? "",
            otp: otpValue,
        };
        verifyMfaMutation.mutate(data);
    }

    const backButton = useMemo(()=> {
        return (
            <Tooltip
                content={"Back"}
                placement={"right"}
                showArrow
            >
                <Button
                    variant={"bordered"}
                    isIconOnly
                    radius={"full"}
                    onPress={() => handleBackClick()}
                >
                    <ChevronLeftIcon
                        fontSize={20}
                        className={"text-muted-foreground"}
                    />
                </Button>
            </Tooltip>
        );
    }, [currentPage])

    return (
        <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
                {currentPage === 1 && (
                    <motion.div
                        key="page1"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{duration: 0.3, ease: 'easeInOut'}}
                        className="flex flex-col"
                    >
                        <form
                            onSubmit={loginForm.handleSubmit(handleLoginSubmit)}
                            className="flex flex-col space-y-2"
                        >
                            <div className={"flex flex-col gap-1 mb-7"}>
                                <h1 className={"text-xl font-extrabold text-primary"}>
                                    Revquix Sign In
                                </h1>

                                <span className={"text-xs leading-4 inline-block"}>
                                    Welcome back! Log in to continue writing blogs, joining forums, and connecting with the community!
                                </span>
                            </div>

                            <OauthButtons/>

                            <TextDivider text={"or"}/>

                            <div className="flex flex-col gap-4 mb-4">
                                <Input
                                    {...loginForm.register('entrypoint')}
                                    type="text"
                                    label="Email or Username"
                                    placeholder="Enter your email or username"
                                    variant="bordered"
                                    isInvalid={!!loginForm.formState.errors.entrypoint}
                                    errorMessage={loginForm.formState.errors.entrypoint?.message}
                                    autoComplete="email"
                                    size='lg'
                                />

                                <Input
                                    {...loginForm.register('password')}
                                    type="password"
                                    label="Password"
                                    placeholder="Enter your password"
                                    variant="bordered"
                                    isInvalid={!!loginForm.formState.errors.password}
                                    errorMessage={loginForm.formState.errors.password?.message}
                                    autoComplete="new-password"
                                    size="lg"
                                />
                            </div>

                            <small className={"self-end mb-4 text-muted-foreground text-sm"}>
                                <Link
                                    href={PATH_CONSTANTS.FORGOT_PASSWORD}
                                    className={"text-blue-700 underline"}
                                    onClick={e => handleLinkClick(e, PATH_CONSTANTS.FORGOT_PASSWORD)}
                                >
                                    Forgot Password?
                                    {isNavigating(PATH_CONSTANTS.FORGOT_PASSWORD) && (
                                        <span
                                            className="ml-1 animate-spin inline-block w-3 h-3 border-2 border-blue-700 border-t-transparent rounded-full align-middle"/>
                                    )}
                                </Link>
                            </small>

                            <Button
                                type="submit"
                                color="primary"
                                size="lg"
                                className="w-full"
                                isDisabled={!loginForm.formState.isValid || tokenMutation.isPending}
                                isLoading={tokenMutation.isPending}
                            >
                                Continue
                            </Button>

                            <small className={"self-center text-center font-nunito text-gray-700 text-sm"}>
                                Don&apos;t have an account? <Link
                                href={PATH_CONSTANTS.REGISTER}
                                className={"text-blue-700 underline"}
                                onClick={e => handleLinkClick(e, PATH_CONSTANTS.REGISTER)}
                            >
                                Register
                                {isNavigating(PATH_CONSTANTS.REGISTER) && (
                                    <span
                                        className="ml-1 animate-spin inline-block w-3 h-3 border-2 border-blue-700 border-t-transparent rounded-full align-middle"/>
                                )}
                            </Link>
                            </small>
                        </form>
                    </motion.div>
                )}

                {currentPage === 2 && (
                    <motion.div
                        key="page2"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{duration: 0.3, ease: 'easeInOut'}}
                        className="flex flex-col"
                    >
                        <div>
                            {backButton}
                        </div>
                        <div className="flex items-center justify-center">
                            <Lottie
                                animationData={otpShieldLottie}
                                loop={false}
                                className={"w-[35%]"}
                            />
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <h2 className={"text-xl font-bold text-primary"}>
                                MFA Verification
                            </h2>
                            <span className={"text-muted-foreground text-sm w-[80%] text-center"}>
                                We sent OTP (One-Time Password) to your email address
                            </span>

                            <InputOtp
                                length={4}
                                variant={"bordered"}
                                radius={"lg"}
                                value={otpValue}
                                onValueChange={setOtpValue}
                            />

                            <Button
                                fullWidth
                                color={"primary"}
                                className={"mt-2"}
                                isDisabled={!isValidOtp || verifyMfaMutation.isPending || !authResponse}
                                isLoading={verifyMfaMutation.isPending}
                                onPress={handleOtpSubmit}
                            >
                                Confirm OTP
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Login;