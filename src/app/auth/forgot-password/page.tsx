"use client";

import React, {useMemo, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {Button, Input} from "@heroui/react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import Link from "next/link";
import {PATH_CONSTANTS} from "@/src/core/constants/path-constants";
import {useLink} from "@/src/core/hooks/useLink";
import OauthButtons from "@/src/core/components/buttons/oauth-buttons";
import TextDivider from "@/src/core/components/text-divider";
import {ChevronLeftIcon} from "@heroui/shared-icons";
import {Tooltip} from "@heroui/tooltip";

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

type LoginFormData = z.infer<typeof loginSchema>;

const ForgotPassword = () => {

    const [currentPage, setCurrentPage] = useState<1 | 2 | 3>(1);
    const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
    const {handleLinkClick, isNavigating} = useLink();
    const [formData, setFormData] = useState({
        entrypoint: '',
        password: '',
    });
    const [otpValue, setOtpValue] = useState<string>('');

    // Login form
    const loginForm = useForm<LoginFormData>({
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

    const handleLoginSubmit = (data: LoginFormData) => {
        setFormData({
            entrypoint: data.entrypoint,
            password: data.password,
        });
        // TODO: Implement login API call
        console.log('Login data:', data);
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
                                    Forgot your password?
                                </h1>

                                <span className={"text-xs leading-4 inline-block"}>
                                    Enter your email address or username below and we'll send you a link to reset your password.
                                </span>
                            </div>


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
                        <form>
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

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ForgotPassword;