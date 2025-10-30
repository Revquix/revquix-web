"use client";

import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";

const Initial = () => {

    const [currentPage, setCurrentPage] = useState<1 | 2 | 3 | 4>(1);
    const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

    const goToPage = (page: 1 | 2 | 3 | 4) => {
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
                        transition={{duration: 0.3, ease: 'easeInOut'}}
                        className="flex flex-col"
                    >
                        <span>
                            Username Page
                        </span>
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
                        <span>
                            MFA Page
                        </span>
                    </motion.div>
                )}

                {currentPage === 3 && (
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
                        <span>
                            Name Page
                        </span>
                    </motion.div>
                )}

                {currentPage === 4 && (
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
                        <span>
                            Profile Picture Page
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Initial;