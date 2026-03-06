"use client";

import React, {useCallback, useState} from 'react';
import Logo from "@/src/core/components/logo/logo";
import {FaGithub} from "react-icons/fa";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@heroui/react";
import LandingNavBrand from "@/src/features/landing/components/landing-nav-brand";

const LandingNavbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openGithub = useCallback(() => {
        window.open("https://github.com/revquix", "_blank");
    }, []);

    const MENU_ITEMS = [
        { label: "Profile" },
        // { label: "Dashboard" },
        // { label: "Activity", color: "warning" },
        // { label: "Analytics" },
        // { label: "System" },
        // { label: "Deployments" },
        // { label: "My Settings" },
        // { label: "Team Settings" },
        // { label: "Help & Feedback" },
        // { label: "Log Out", color: "danger" },
    ];

    return (
        <Navbar
            isBordered
            maxWidth="2xl"
        >
            {/* Mobile Menu Toggle */}
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            {/* Mobile Brand */}
            <NavbarContent className="sm:hidden pr-3" justify="center">
                <LandingNavBrand />
            </NavbarContent>

            {/* Desktop Brand */}
            <NavbarContent className="hidden sm:flex" justify="start">
                <LandingNavBrand />
            </NavbarContent>

            {/* Desktop Navigation */}
            {/*<NavbarContent className="hidden sm:flex gap-4" justify="center">*/}
            {/*    <NavbarItem>*/}
            {/*        <Link color="foreground" href="#">*/}
            {/*            Features*/}
            {/*        </Link>*/}
            {/*    </NavbarItem>*/}

            {/*    <NavbarItem isActive>*/}
            {/*        <Link color="warning" href="#">*/}
            {/*            Customers*/}
            {/*        </Link>*/}
            {/*    </NavbarItem>*/}

            {/*    <NavbarItem>*/}
            {/*        <Link color="foreground" href="#">*/}
            {/*            Integrations*/}
            {/*        </Link>*/}
            {/*    </NavbarItem>*/}
            {/*</NavbarContent>*/}

            {/* Auth Buttons */}
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        isIconOnly
                        onPress={openGithub}
                    >
                        <FaGithub fontSize={27} />
                    </Button>
                </NavbarItem>
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenu
                motionProps={{
                    initial: { opacity: 0, y: -20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -20 },
                    transition: {
                        duration: 0.3,
                        ease: "easeInOut",
                    },
                }}
            >
                {MENU_ITEMS.map((item, index) => (
                    <NavbarMenuItem
                        key={index}
                    >
                        <Link
                            className="w-full"
                            href="#"
                            size="lg"
                            color={"foreground"}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default LandingNavbar;