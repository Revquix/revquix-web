import React from 'react';
import {ASSET_CONSTANTS} from "@/src/core/constants/asset-constants";
import {Button} from "@heroui/react";
import Image from "next/image";

const GoogleOauthButton = () => {
    return (
        <Button
            className={"flex-1 flex items-center gap-2 border-1 border-gray-200 text-gray-700"}
            size={"md"}
            variant={'bordered'}
            startContent={<Image src={ASSET_CONSTANTS.GOOGLE_LOGO} width={24} height={24} alt={'Google'} />}
        >
            Google
        </Button>
    );
};

export default GoogleOauthButton;