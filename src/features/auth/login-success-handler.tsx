import {AuthResponse} from "@/src/core/payload/response/auth-response";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {setAuthData} from "@/src/core/state/slice/auth-slice";
import {Dispatch} from "redux";
import {ReadonlyURLSearchParams} from "next/navigation";
import {PATH_CONSTANTS} from "@/src/core/constants/path-constants";

export const loginSuccessHandler = (
    response: AuthResponse,
    router: AppRouterInstance,
    dispatch: Dispatch,
    searchParams: ReadonlyURLSearchParams
) => {
    dispatch(setAuthData({
        accessToken: response.accessToken,
        userId: response.userId
    }));
    const redirect = searchParams.get("redirect");
    if (redirect) {
        router.push(`${PATH_CONSTANTS.INITIAL}?redirect=${encodeURIComponent(redirect)}`);
    } else {
        router.push("/initial");
    }
}