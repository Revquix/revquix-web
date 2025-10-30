import {ExceptionResponse} from "@/src/core/payload/response/exception-response";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {PATH_CONSTANTS} from "@/src/core/constants/path-constants";
import {addToast} from "@heroui/toast";

export const loginErrorHandler = (
    exception: ExceptionResponse,
    router: AppRouterInstance,
) => {
    const code: string = exception.code;
    if (code === 'DE-11') {
        router.push(PATH_CONSTANTS.REGISTER);
        addToast({
            classNames: {
                base: "dark"
            },
            title: "Not Registered",
            description: "Please register your account to continue.",
            color: "danger"
        })
    } else {
        addToast({
            classNames: {
                base: "dark"
            },
            title: "Login Failed",
            description: exception.message,
            color: "danger"
        })
    }
}