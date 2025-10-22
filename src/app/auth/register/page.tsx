"use client";

import React, {useCallback, useMemo, useState} from 'react';
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
import Lottie from "lottie-react";
import otpShieldLottie from '@/public/lottie/otp_shield.json';
import {maskEmail} from '@/src/core/utils/email-mask';
import {useRegistrationStatus} from "@/src/core/hooks/useRegistrationStatus";
import {useMutation} from "@tanstack/react-query";
import {RegistrationStatusResponse} from "@/src/core/payload/response/registration-status-response";
import {ModuleResponse} from "@/src/core/payload/response/module-response";
import {AxiosError} from "axios";
import {AuthController} from "@/src/core/controller/auth-controller";
import apiErrorWrapper from "@/src/core/utils/api-error-wrapper";
import {addToast} from "@heroui/toast";
import {RegisterRequest} from "@/src/core/payload/request/register-request";
import {RegisterOtpRequest} from "@/src/core/payload/request/register-otp-request";

const emailSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
});

const passwordSchema = z.object({
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/\d/, 'Password must contain at least one number'),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});

type EmailFormData = z.infer<typeof emailSchema>;
type PasswordFormData = z.infer<typeof passwordSchema>;

const Register = () => {

    const [currentPage, setCurrentPage] = useState<1 | 2 | 3>(1);
    const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
    const {handleLinkClick, isNavigating} = useLink();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [registrationResponse, setRegistrationResponse] = useState<ModuleResponse | null>(null);
    const [otpValue, setOtpValue] = useState<string>('');

    // Email form
    const emailForm = useForm<EmailFormData>({
        resolver: zodResolver(emailSchema),
        mode: 'onChange',
    });

    // Password form
    const passwordForm = useForm<PasswordFormData>({
        resolver: zodResolver(passwordSchema),
        mode: 'onChange',
    });

    const isValidOtp = useMemo(() => {
        return otpValue.length === 4 && /^\d{4}$/.test(otpValue);
    }, [otpValue]);

    // Registration status check mutation
    const registrationStatusMutation = useMutation<RegistrationStatusResponse, AxiosError, string>({
        mutationFn: (email: string) => AuthController.registrationStatus(email),
        onSuccess: (data) => {
            if (data.isRegistered) {
                addToast({
                    classNames: {
                        base: "dark"
                    },
                    title: "Account Already Exists",
                    description: "This email is already registered. Please try logging in instead.",
                    color: "warning"
                });
                return;
            }
            setDirection('forward');
            setCurrentPage(2);
        },
        onError: (error: AxiosError) => {
            apiErrorWrapper(
                error,
                exceptionResponse => addToast({
                    classNames: {
                        base: "dark"
                    },
                    title: "Error",
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

    // Registration mutation
    const registrationMutation = useMutation<ModuleResponse, AxiosError, RegisterRequest>({
        mutationFn: (data: RegisterRequest) => AuthController.register(data),
        onSuccess: (data) => {
            setRegistrationResponse(data);
            addToast({
                classNames: {
                    base: "dark"
                },
                title: "Registration Successful",
                description: "Please check your email for verification code.",
                color: "success"
            });
            setDirection('forward');
            setCurrentPage(3);
        },
        onError: (error: AxiosError) => {
            apiErrorWrapper(
                error,
                exceptionResponse => addToast({
                    classNames: {
                        base: "dark"
                    },
                    title: "Registration Failed",
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

    const registrationOtpMutation = useMutation<ModuleResponse, AxiosError, RegisterOtpRequest>({
        mutationFn: (registerOtpRequest: RegisterOtpRequest) => AuthController.registerOtp(registerOtpRequest),
        onSuccess: (data) => {
            addToast({
                classNames: {
                    base: "dark"
                },
                title: "OTP Verified",
                description: data.message,
                color: "success"
            });
        },
        onError: (error: AxiosError) => {
            apiErrorWrapper(
                error,
                exceptionResponse => addToast({
                    classNames: {
                        base: "dark"
                    },
                    title: "Error",
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

    const handleEmailSubmit = (data: EmailFormData) => {
        setFormData(prev => ({...prev, email: data.email}));
        registrationStatusMutation.mutate(data.email);
    };

    const handleBackClick = () => {
        setDirection('backward');
        setCurrentPage(currentPage - 1 as 1 | 2 | 3);
    }

    const handlePasswordSubmit = async (data: PasswordFormData) => {
        const registerData: RegisterRequest = {
            email: formData.email,
            password: data.password
        };

        setFormData(prev => ({...prev, password: data.password}));
        registrationMutation.mutate(registerData);
    };

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

    const handleConfirmOtp = () => {
        if (registrationResponse) {
            const registerOtpRequest: RegisterOtpRequest = {
                otp: otpValue,
                userId: registrationResponse.userId || ''
            };
            registrationOtpMutation.mutate(registerOtpRequest);
        } else {
            addToast({
                classNames: {
                    base: "dark"
                },
                title: "Error",
                description: "Something went wrong. Please try again later.",
                color: "danger"
            })
            window.location.reload();
        }
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
                            onSubmit={emailForm.handleSubmit(handleEmailSubmit)}
                            className="flex flex-col space-y-2"
                        >
                            <div className={"flex flex-col gap-1 mb-7"}>
                                <h1 className={"text-xl font-extrabold text-primary"}>
                                    Register Account
                                </h1>

                                <span className={"text-xs leading-4 inline-block"}>
                                    Ready to share your ideas? Register now to write blogs, join forums, and connect with others!
                                </span>
                            </div>

                            <OauthButtons/>

                            <TextDivider text={"or"}/>

                            <div className="mt-4 mb-6">
                                <Input
                                    {...emailForm.register('email')}
                                    type="email"
                                    label="Email Address"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                    isInvalid={!!emailForm.formState.errors.email}
                                    errorMessage={emailForm.formState.errors.email?.message}
                                    autoComplete="email"
                                    size='lg'
                                />
                            </div>

                            <Button
                                type="submit"
                                color="primary"
                                size="lg"
                                className="w-full"
                                isDisabled={!emailForm.formState.isValid || registrationStatusMutation.isPending}
                                isLoading={registrationStatusMutation.isPending}
                            >
                                Continue
                            </Button>

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
                        <form
                            onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)}
                            className="flex flex-col space-y-6"
                        >
                            <div>
                                {backButton}
                            </div>
                            <div className="space-y-4">
                                <Input
                                    {...passwordForm.register('password')}
                                    type="password"
                                    label="Password"
                                    placeholder="Enter your password"
                                    variant="bordered"
                                    isInvalid={!!passwordForm.formState.errors.password}
                                    errorMessage={passwordForm.formState.errors.password?.message}
                                    autoComplete="new-password"
                                    size="lg"
                                />

                                <Input
                                    {...passwordForm.register('confirmPassword')}
                                    type="password"
                                    label="Confirm Password"
                                    placeholder="Re-enter your password"
                                    variant="bordered"
                                    isInvalid={!!passwordForm.formState.errors.confirmPassword}
                                    errorMessage={passwordForm.formState.errors.confirmPassword?.message}
                                    autoComplete="new-password"
                                    size="lg"
                                />
                            </div>

                            <div className="space-y-3">

                                <small
                                    className={"text-muted-foreground text-xs select-none inline-block text-justify"}>
                                    By signing up, you confirm that you have read, understood, and agree to adhere to
                                    Sana&nbsp;
                                    <Link
                                        href={PATH_CONSTANTS.TERMS_OF_SERVICE}
                                        className={"text-blue-700 underline"}
                                        onClick={e => handleLinkClick(e, PATH_CONSTANTS.TERMS_OF_SERVICE)}
                                    >
                                        Terms of Service
                                        {isNavigating(PATH_CONSTANTS.TERMS_OF_SERVICE) && (
                                            <span
                                                className="ml-1 animate-spin inline-block w-3 h-3 border-2 border-blue-700 border-t-transparent rounded-full align-middle"/>
                                        )}
                                    </Link>
                                    &nbsp;and&nbsp;
                                    <Link
                                        href={PATH_CONSTANTS.PRIVACY_POLICY}
                                        className={"text-blue-700 underline"}
                                        onClick={e => handleLinkClick(e, PATH_CONSTANTS.PRIVACY_POLICY)}
                                    >
                                        Privacy Policy
                                        {isNavigating(PATH_CONSTANTS.PRIVACY_POLICY) && (
                                            <span
                                                className="ml-1 animate-spin inline-block w-3 h-3 border-2 border-blue-700 border-t-transparent rounded-full align-middle"/>
                                        )}
                                    </Link>
                                    , ensuring a secure and seamless experience
                                </small>

                                <Button
                                    type="submit"
                                    color="primary"
                                    size="lg"
                                    className="w-full"
                                    isDisabled={!passwordForm.formState.isValid || registrationMutation.isPending}
                                    isLoading={registrationMutation.isPending}
                                >
                                    Register
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                )}

                {currentPage === 3 && (
                    <motion.div
                        key="page3"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{duration: 0.3, ease: 'easeInOut'}}
                        className="flex flex-col"
                    >
                        <div className="flex items-center justify-center">
                            <Lottie
                                animationData={otpShieldLottie}
                                loop={false}
                                className={"w-[25%]"}
                            />
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <h2 className={"text-xl font-bold text-primary"}>
                                Verify your Email
                            </h2>
                            <span className={"text-muted-foreground text-sm w-[80%] text-center"}>
                                We sent OTP (One-Time Password) to your email address
                            </span>

                            <div className={"flex gap-2 items-center justify-center"}>
                                <span className="block max-w-[90%] truncate overflow-hidden text-ellipsis whitespace-nowrap text-sm text-muted-foreground font-bold">
                                    {maskEmail(formData.email)}
                                </span>
                                <Tooltip
                                    content={"Edit Email"}
                                    placement={"top"}
                                    showArrow
                                    color={"primary"}
                                >
                                    <Button
                                        isIconOnly
                                        radius={"full"}
                                        size={"sm"}
                                        variant={"flat"}
                                        color="primary"
                                        onPress={()=> goToPage(1)}
                                    >
                                        <EditIcon/>
                                    </Button>
                                </Tooltip>
                            </div>
                            <InputOtp
                                length={4}
                                variant={"bordered"}
                                radius={"lg"}
                                value={otpValue}
                                onValueChange={setOtpValue}
                            />

                            <div className={"flex items-center justify-center"}>
                                <Button
                                    variant={"light"}
                                    size={"sm"}
                                    color={"primary"}
                                >
                                    Resend OTP
                                </Button>
                            </div>

                            <Button
                                fullWidth
                                color={"primary"}
                                className={"mt-2"}
                                isDisabled={!isValidOtp}
                                isLoading={registrationOtpMutation.isPending}
                                onPress={()=> handleConfirmOtp()}
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

export default Register;