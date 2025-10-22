export type ErrorConstant = {
    message: string;
    code: string;
};

export type ErrorCode = keyof typeof ERROR_CONSTANTS;

export const ERROR_CONSTANTS = {
    BASE_URL_NOT_PRESENT: {
        message: "Base URL is not injected through .env files",
        code: "UI__ERROR--1001"
    }
} as const;