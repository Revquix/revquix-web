"use client";

import type {ThemeProviderProps} from "next-themes";

import * as React from "react";
import {HeroUIProvider} from "@heroui/system";
import {useRouter} from "next/navigation";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/query-core";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {ToastProvider} from "@heroui/toast";

export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
    interface RouterConfig {
        routerOptions: NonNullable<
            Parameters<ReturnType<typeof useRouter>["push"]>[1]
        >;
    }
}

export const queryClient: QueryClient = new QueryClient();

export function Providers({children, themeProps}: ProvidersProps) {
    const router = useRouter();

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <HeroUIProvider navigate={router.push}>
                <ToastProvider placement={"top-right"} toastProps={{
                    radius: "lg",
                    timeout: 4000,
                }} />
                <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
            </HeroUIProvider>
        </QueryClientProvider>
    );
}
