import {AuthResponse} from "@/src/core/payload/response/auth-response";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {setAuthData} from "@/src/core/state/slice/auth-slice";
import {Dispatch} from "redux";
import {ReadonlyURLSearchParams} from "next/navigation";
import {PATH_CONSTANTS} from "@/src/core/constants/path-constants";

/**
 * Validates if a URL is safe for redirection
 * Prevents open redirect attacks by ensuring URL is relative or from same origin
 */
const isValidRedirectUrl = (url: string): boolean => {
    try {
        // Allow relative URLs that start with /
        if (url.startsWith('/')) {
            return true;
        }

        // For absolute URLs, check if they're from the same origin
        const redirectUrl = new URL(url);
        const currentOrigin = globalThis.window ? globalThis.window.location.origin : '';

        return redirectUrl.origin === currentOrigin;
    } catch {
        return false;
    }
};

/**
 * Validates the auth response has required fields
 */
const validateAuthResponse = (response: AuthResponse): boolean => {
    return !!(response?.userId && response?.accessToken);
};

export const loginSuccessHandler = (
    response: AuthResponse,
    router: AppRouterInstance,
    dispatch: Dispatch,
    searchParams: ReadonlyURLSearchParams
): void => {
    try {
        // Validate response data
        if (!validateAuthResponse(response)) {
            console.error('Invalid auth response: missing required fields');
            // eslint-disable-next-line @typescript-eslint/only-throw-error
            throw new Error('Invalid authentication response');
        }

        // Store auth data in Redux
        dispatch(setAuthData({
            accessToken: response.accessToken,
            userId: response.userId
        }));

        // Handle redirect with security validation
        const redirect = searchParams.get("redirect");
        let redirectPath: string = PATH_CONSTANTS.INITIAL;

        if (redirect && isValidRedirectUrl(redirect)) {
            redirectPath = `${PATH_CONSTANTS.INITIAL}?redirect=${encodeURIComponent(redirect)}`;
        } else if (redirect) {
            // Log potential security issue
            console.warn('Invalid redirect URL attempted:', redirect);
        }

        // Navigate to the appropriate page
        router.push(redirectPath);

    } catch (error) {
        console.error('Error in login success handler:', error);
        // Fallback to initial page on any error
        router.push(PATH_CONSTANTS.INITIAL);
        throw error; // Re-throw to allow caller to handle
    }
}