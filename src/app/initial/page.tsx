"use client";

import React, {useState, useEffect} from 'react';
import {AnimatePresence, motion} from "framer-motion";

interface ApiResponse {
    username: boolean;
    mfa: boolean;
    name: boolean;
    profileImage: boolean;
}

type PageNumber = 1 | 2 | 3 | 4;

const Initial = () => {

    const [currentPage, setCurrentPage] = useState<PageNumber>(1);
    const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
    const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [availablePages, setAvailablePages] = useState<number[]>([]);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    // Mock API call - replace with your actual API
    const fetchInitialStatus = async (): Promise<ApiResponse> => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock response - replace with actual API call
        return {
            username: true,
            mfa: true,
            name: false,
            profileImage: true
        };
    };

    useEffect(() => {
        const initializeComponent = async () => {
            try {
                const response = await fetchInitialStatus();
                setApiResponse(response);

                // Create array of available pages based on API response
                const pages: number[] = [];
                if (response.username) pages.push(1);
                if (response.mfa) pages.push(2);
                if (response.name) pages.push(3);
                if (response.profileImage) pages.push(4);

                setAvailablePages(pages);

                // Set current page to first available page
                if (pages.length > 0) {
                    setCurrentPage(pages[0] as PageNumber);
                    setCurrentPageIndex(0);
                }

                setIsLoading(false);
            } catch (error) {
                console.error('Failed to fetch initial status:', error);
                setIsLoading(false);
            }
        };

        initializeComponent();
    }, []);

    const moveNext = () => {
        if (currentPageIndex < availablePages.length - 1) {
            const nextIndex = currentPageIndex + 1;
            const nextPage = availablePages[nextIndex] as PageNumber;
            setDirection('forward');
            setCurrentPage(nextPage);
            setCurrentPageIndex(nextIndex);
        } else {
            // Last page reached - navigate away or handle completion
            console.log('Last page reached - ready to navigate');
            // You can add navigation logic here
        }
    };

    const movePrev = () => {
        if (currentPageIndex > 0) {
            const prevIndex = currentPageIndex - 1;
            const prevPage = availablePages[prevIndex] as PageNumber;
            setDirection('backward');
            setCurrentPage(prevPage);
            setCurrentPageIndex(prevIndex);
        }
    };

    const isLastPage = currentPageIndex === availablePages.length - 1;
    const isFirstPage = currentPageIndex === 0;

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
        <div className="relative overflow-hidden min-h-screen p-4">
            {isLoading ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="text-lg">Loading...</div>
                </div>
            ) : (
                <>
                    {/* Page Info */}
                    <div className="mb-4 p-4 bg-gray-100 rounded">
                        <div className="text-sm text-gray-600">
                            Available Pages: {availablePages.join(', ')}
                        </div>
                        <div className="text-sm text-gray-600">
                            Current: Page {currentPage} (Index: {currentPageIndex + 1}/{availablePages.length})
                        </div>
                        <div className="text-sm text-gray-600">
                            {isLastPage ? 'Last Page' : 'Not Last Page'} | {isFirstPage ? 'First Page' : 'Not First Page'}
                        </div>
                        {/* API Response for debugging: {JSON.stringify(apiResponse)} */}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mb-4 flex gap-4">
                        <button
                            onClick={movePrev}
                            disabled={isFirstPage}
                            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                            Previous
                        </button>
                        <button
                            onClick={moveNext}
                            className="px-4 py-2 bg-green-500 text-white rounded"
                        >
                            {isLastPage ? 'Complete' : 'Next'}
                        </button>
                    </div>

                    {/* Animated Pages */}
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
                                className="flex flex-col p-6 bg-blue-50 rounded-lg"
                            >
                                <h2 className="text-2xl font-bold mb-4">Username Page</h2>
                                <span>Configure your username here</span>
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
                                className="flex flex-col p-6 bg-green-50 rounded-lg"
                            >
                                <h2 className="text-2xl font-bold mb-4">MFA Page</h2>
                                <span>Set up multi-factor authentication</span>
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
                                className="flex flex-col p-6 bg-yellow-50 rounded-lg"
                            >
                                <h2 className="text-2xl font-bold mb-4">Name Page</h2>
                                <span>Enter your display name</span>
                            </motion.div>
                        )}

                        {currentPage === 4 && (
                            <motion.div
                                key="page4"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{duration: 0.3, ease: 'easeInOut'}}
                                className="flex flex-col p-6 bg-purple-50 rounded-lg"
                            >
                                <h2 className="text-2xl font-bold mb-4">Profile Picture Page</h2>
                                <span>Upload your profile picture</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </div>
    );
};

export default Initial;