import { AxiosError } from "axios";
import { ExceptionResponse } from "@/src/core/payload/response/exception-response";

const DEFAULT_RESPONSE: ExceptionResponse = {
    errorType: "Internal Error",
    timestamp: new Date().toISOString(),
    message: "No response from backend. Please try again later.",
    code: "NO_RESPONSE",
    breadcrumbId: "UNKNOWN_BREADCRUMB",
    isTokenExpired: false,
    httpStatus: "UNKNOWN_STATUS"
};

export const generateExceptionResponse = (error: AxiosError): ExceptionResponse => {
    const { response } = error;
    if (!response) return DEFAULT_RESPONSE;

    const data = response.data as Partial<ExceptionResponse> | undefined;

    return {
        errorType: data?.errorType ?? DEFAULT_RESPONSE.errorType,
        timestamp: data?.timestamp ?? DEFAULT_RESPONSE.timestamp,
        message: data?.message ?? DEFAULT_RESPONSE.message,
        code: data?.code ?? "BACKEND_ERROR",
        breadcrumbId: data?.breadcrumbId ?? DEFAULT_RESPONSE.breadcrumbId,
        isTokenExpired: data?.isTokenExpired ?? false,
        localizedMessage: data?.localizedMessage,
        httpStatus: response.status ?? DEFAULT_RESPONSE.httpStatus
    };
};
