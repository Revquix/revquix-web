export type ExceptionResponse = {
    message: string;
    code: string;
    breadcrumbId: string;
    isTokenExpired: boolean;
    localizedMessage?: string;
    httpStatus?: string | number;
    errorType: string;
    timestamp: string;
}