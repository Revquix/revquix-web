import React from 'react';
import {NavbarBrand} from "@heroui/react";
import Link from "next/link";
import Logo from "@/src/core/components/logo/logo";

const LandingNavBrand = () => {
    return (
        <NavbarBrand as={Link} href="/">
            <Logo size={30} />
            <p className="font-bold text-lg ml-2">Revquix</p>
        </NavbarBrand>
    );
};

export default LandingNavBrand;