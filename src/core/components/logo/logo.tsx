import React from 'react';
import {ASSET_CONSTANTS} from "@/src/core/constants/asset-constants";
import Image from "next/image";

type LogoProps = {
    size?: number;
} & Omit<React.ComponentProps<typeof Image> , 'alt' | 'src'>;
const Logo: React.FC<LogoProps> = (
    {size = 44, ...rest}
) => {
    return (
        <Image
            src={ASSET_CONSTANTS.LOGO}
            alt={"Revquix Logo"}
            width={size}
            height={size}
            {...rest}
        />
    );
};

export default Logo;