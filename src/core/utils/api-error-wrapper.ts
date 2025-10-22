import { AxiosError } from "axios";
import {ExceptionResponse} from "@/src/core/payload/response/exception-response";
import {generateExceptionResponse} from "@/src/core/utils/exception-response-generator";

const validationErrorStatusCodes = new Set([400, 401, 403, 422]);

const apiErrorWrapper = (
    error: AxiosError,
    clientErrorHandler: (exceptionResponse: ExceptionResponse) => void,
    serverErrorHandler: (error: AxiosError) => void
) => {
    const exceptionResponse = generateExceptionResponse(error);
    const httpStatus = Number(exceptionResponse.httpStatus);

    if (!isNaN(httpStatus) && validationErrorStatusCodes.has(httpStatus)) {
        return clientErrorHandler(exceptionResponse);
    }
    return serverErrorHandler(error);
};

export default apiErrorWrapper;
