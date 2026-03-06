import React from 'react';
import {NavbarContent, NavbarItem, Link} from "@heroui/react";
import {LANDING_NAV_LINKS} from "@/src/core/constants/landing-nav-links";
import {usePathname} from "next/navigation";

const LandingDesktopNavContent = () => {

    const pathname = usePathname();

    return (
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
            {LANDING_NAV_LINKS.map((link) => (
                <NavbarItem key={link.href} isActive={pathname === link.href}>
                    <Link
                        color={pathname === link.href ? "warning" : "foreground"}
                        href={link.href}
                    >
                        {link.label}
                    </Link>
                </NavbarItem>
            ))}
        </NavbarContent>
    );
};

export default LandingDesktopNavContent;