"use client";

import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {Button, Input} from "@heroui/react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";

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

const RegisterForm = () => {

    const [currentPage, setCurrentPage] = useState<1 | 2 | 3>(1);
    const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

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

    const handleEmailSubmit = (data: EmailFormData) => {
        setFormData(prev => ({ ...prev, email: data.email }));
        setDirection('forward');
        setCurrentPage(2);
    };

    const handlePasswordSubmit = async (data: PasswordFormData) => {
        setFormData(prev => ({ ...prev, password: data.password }));

        // API call will be implemented here
        try {
            setDirection('forward');
            setCurrentPage(3);
        } catch (error) {
            console.error('Registration error:', error);
        }
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
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="flex flex-col"
                    >
                        <form
                            onSubmit={emailForm.handleSubmit(handleEmailSubmit)}
                            className="flex flex-col space-y-6"
                        >
                            <div className="space-y-4">
                                <Input
                                    {...emailForm.register('email')}
                                    type="email"
                                    label="Email Address"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                    isInvalid={!!emailForm.formState.errors.email}
                                    errorMessage={emailForm.formState.errors.email?.message}
                                    autoComplete="email"
                                    size="lg"
                                />

                                <div className="flex justify-center pt-2">

                                </div>
                            </div>

                            <div>
                                <Button
                                    type="submit"
                                    color="primary"
                                    size="lg"
                                    className="w-full"
                                    isDisabled={!emailForm.formState.isValid}
                                >
                                    Continue
                                </Button>
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
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="flex flex-col"
                    >
                        <form
                            onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)}
                            className="flex flex-col space-y-6"
                        >
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
                                <Button
                                    type="submit"
                                    color="primary"
                                    size="lg"
                                    className="w-full"
                                    isDisabled={!passwordForm.formState.isValid}
                                >
                                    Register
                                </Button>
                                <Button
                                    type="button"
                                    variant="flat"
                                    size="lg"
                                    className="w-full"
                                    onPress={() => goToPage(1)}
                                >
                                    Back
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
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="flex flex-col"
                    >
                        <div className="flex items-center justify-center py-8">
                            <div className="text-center">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    Verify Your Email
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    OTP verification will be implemented here
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Button
                                type="button"
                                color="primary"
                                size="lg"
                                className="w-full"
                                onPress={() => goToPage(1)}
                            >
                                Go to First Page
                            </Button>
                            <Button
                                type="button"
                                variant="flat"
                                size="lg"
                                className="w-full"
                                onPress={() => goToPage(2)}
                            >
                                Go to Second Page
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default RegisterForm;