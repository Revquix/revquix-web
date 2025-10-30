'use client';

import {Button} from "@heroui/button";
import {useLogout} from "@/src/core/hooks/useLogout";

export default function Home() {

    const {logout, isLoading} = useLogout();

    return (
        <div>
            Rohit Parihar

            <Button
                onPress={logout}
                disabled={isLoading}
                isLoading={isLoading}
            >
                Logout
            </Button>
        </div>
    );
}
