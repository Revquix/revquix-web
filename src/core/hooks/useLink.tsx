import {useState, useTransition} from "react";
import {useRouter} from "next/navigation";

export const useLink = () => {
    const [loadingLink, setLoadingLink] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const navigate = (link: string) => {
        setLoadingLink(link);
        startTransition(() => {
            router.push(link);
        });
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        e.preventDefault();
        navigate(link);
    };

    const isNavigating = (link: string) => loadingLink === link && isPending;

    return {
        handleLinkClick,
        navigate,
        isNavigating,
        isPending,
        loadingLink
    };
}