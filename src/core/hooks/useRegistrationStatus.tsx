import {useMutation} from "@tanstack/react-query";
import {RegistrationStatusResponse} from "@/src/core/payload/response/registration-status-response";
import {AxiosError} from "axios";
import {AuthController} from "@/src/core/controller/auth-controller";
import {addToast} from "@heroui/toast";
import {useState} from "react";
import apiErrorWrapper from "@/src/core/utils/api-error-wrapper";

export const useRegistrationStatus = () => {

    const [success, setSuccess] = useState<boolean>(false);

    const mutation = useMutation<RegistrationStatusResponse, AxiosError, string>({
        mutationFn: (email: string) => AuthController.registrationStatus(email),
        onSuccess: (data) => {
            setSuccess(data.isRegistered);
        },
        onError: (error: AxiosError) => {
            apiErrorWrapper(
                error,
                exceptionResponse => addToast({
                    classNames: {
                        base: "dark"
                    },
                    title: "Error",
                    description: exceptionResponse.message,
                    color: "danger"
                }),
                error => addToast({
                    classNames: {
                        base: "dark"
                    },
                    title: "Server Error",
                    description: "An unexpected error occurred. Please try again later.",
                    color: "danger"
                })
            )
        },
    });

    return {
        ...mutation,
        success,
    }
};