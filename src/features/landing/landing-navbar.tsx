"use client";

import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import Logo from "@/src/core/components/logo/logo";
import {ASSET_CONSTANTS} from "@/src/core/constants/asset-constants";
import Image from "next/image";
import {FaGithub} from "react-icons/fa";

const LandingNavbar = () => {

    const openGithub = () => {
        window.open("https://github.com/revquix", "_blank");
    }

    return (
        <Navbar shouldHideOnScroll maxWidth={"2xl"} className={"font-nunito"}>
            <NavbarBrand className={"flex gap-1"}>
                <Logo size={30}/>
                <p className="font-bold text-inherit text-lg">Revquix</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link aria-current="page" href="#">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        isIconOnly={true}
                        onPress={openGithub}
                    >
                        <FaGithub fontSize={24} />
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default LandingNavbar;