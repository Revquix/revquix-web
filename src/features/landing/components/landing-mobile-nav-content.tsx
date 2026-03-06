import React from 'react';
import {
    NavbarMenu,
    NavbarMenuItem,
    Link,
} from "@heroui/react";
import {LANDING_MOBILE_MENU} from "@/src/core/constants/landing-nav-links";

const LandingMobileNavContent = () => {
    return (
        <NavbarMenu>
            {LANDING_MOBILE_MENU.map((item) => (
                <NavbarMenuItem key={item.href}>
                    <Link className="w-full" href={item.href} size="lg">
                        {item.label}
                    </Link>
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
    );
};

export default LandingMobileNavContent;