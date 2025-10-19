"use client";

import React from 'react';
import {Spinner} from "@heroui/react";

const LazySpinner = () => {
    return (
        <div className="flex items-center justify-center h-full w-full">
            <Spinner />
        </div>
    );
};

export default LazySpinner;