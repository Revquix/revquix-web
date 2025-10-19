'use client';

import React from 'react';
import DynamicStepper from '../../core/components/DynamicStepper';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';

const AuthLayout = () => {
    const stepperSteps = [
        {
            id: 'personal-info',
            title: 'Personal Info',
            content: (
                <div className="space-y-3">
                    <p className="text-gray-600 text-sm mb-3">Enter your personal information to get started.</p>
                    <Input
                        type="text"
                        label="Full Name"
                        placeholder="Enter your full name"
                        variant="bordered"
                        size="sm"
                    />
                    <Input
                        type="email"
                        label="Email"
                        placeholder="Enter your email"
                        variant="bordered"
                        size="sm"
                    />
                    <Input
                        type="tel"
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        variant="bordered"
                        size="sm"
                    />
                </div>
            )
        },
        {
            id: 'account-setup',
            title: 'Account Setup',
            content: (
                <div className="space-y-3">
                    <p className="text-gray-600 text-sm mb-3">Set up your account credentials.</p>
                    <Input
                        type="text"
                        label="Username"
                        placeholder="Choose a username"
                        variant="bordered"
                        size="sm"
                    />
                    <Input
                        type="password"
                        label="Password"
                        placeholder="Create a password"
                        variant="bordered"
                        size="sm"
                    />
                    <Input
                        type="password"
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        variant="bordered"
                        size="sm"
                    />
                </div>
            )
        },
        {
            id: 'preferences',
            title: 'Preferences',
            content: (
                <div className="space-y-3">
                    <p className="text-gray-600 text-sm mb-3">Customize your preferences.</p>
                    <div className="space-y-2">
                        <label className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" className="rounded" />
                            <span>Email notifications</span>
                        </label>
                        <label className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" className="rounded" />
                            <span>Two-factor authentication</span>
                        </label>
                        <label className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" className="rounded" />
                            <span>Newsletter subscription</span>
                        </label>
                    </div>
                </div>
            )
        },
        {
            id: 'verification',
            title: 'Verification',
            content: (
                <div className="space-y-3">
                    <p className="text-gray-600 text-sm mb-3">Verify your account to complete the process.</p>
                    <Input
                        type="text"
                        label="Verification Code"
                        placeholder="Enter 6-digit code"
                        variant="bordered"
                        maxLength={6}
                        size="sm"
                    />
                    <div className="text-center">
                        <Button variant="light" size="sm">
                            Resend Code
                        </Button>
                    </div>
                </div>
            )
        }
    ];

    const handleStepChange = (step: number) => {
        console.log('Current step:', step + 1);
    };

    const handleComplete = () => {
        console.log('Stepper completed!');
        // Handle completion logic here
    };

    return (
        <main className="flex min-h-screen bg-amber-400 items-center justify-center">
            <div className={"w-full max-w-[min(400px,95vw)] bg-white min-h-[400px] p-4 rounded-lg shadow-lg"}>
                <DynamicStepper
                    steps={stepperSteps}
                    onStepChange={handleStepChange}
                    onComplete={handleComplete}
                    className="w-full"
                />
            </div>
        </main>
    );
};

export default AuthLayout;