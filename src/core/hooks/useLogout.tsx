import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { AuthController } from "@/src/core/controller/auth-controller";
import { clearAuthData } from "@/src/core/state/slice/auth-slice";
import { addToast } from "@heroui/toast";
import apiErrorWrapper from "@/src/core/utils/api-error-wrapper";
import { PATH_CONSTANTS } from "@/src/core/constants/path-constants";
import {useAppDispatch} from "@/src/core/hooks/redux-hooks";

export const useLogout = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const mutation = useMutation<void, AxiosError, void>({
        mutationFn: () => AuthController.logout(),
        onSuccess: () => {
            // Clear auth data from Redux store
            dispatch(clearAuthData());

            // Show success message
            addToast({
                classNames: {
                    base: "dark"
                },
                title: "Success",
                description: "You have been logged out successfully",
                color: "success"
            });

            // Redirect to login page
            router.push(PATH_CONSTANTS.LOGIN);
        },
        onError: (error: AxiosError) => {

            apiErrorWrapper(
                error,
                exceptionResponse => addToast({
                    classNames: {
                        base: "dark"
                    },
                    title: "Warning",
                    description: exceptionResponse.message + " You have been logged out locally.",
                    color: "warning"
                }),
                _error => addToast({
                    classNames: {
                        base: "dark"
                    },
                    title: "Warning",
                    description: "An error occurred during logout, but you have been logged out locally.",
                    color: "warning"
                })
            );
        },
    });

    const logout = () => {
        mutation.mutate();
    };

    return {
        logout,
        isLoading: mutation.isPending,
        error: mutation.error,
        isError: mutation.isError,
        isSuccess: mutation.isSuccess,
    };
};
