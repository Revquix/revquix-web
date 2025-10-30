import React from 'react';
import Image from "next/image";
import {ASSET_CONSTANTS} from "@/src/core/constants/asset-constants";

const LoaderPage = () => {
    return (
        <div className={"min-w-full min-h-screen flex items-center justify-center"}>
            <Image
                className={"animate-pulse duration-two-seconds"}
                src={ASSET_CONSTANTS.LOGO}
                alt={"Revquix"}
                width={70}
                height={70}
            />
        </div>
    );
};

export default LoaderPage;