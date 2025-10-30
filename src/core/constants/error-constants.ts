export const ERROR_CONSTANTS = {
    BASE_URL_NOT_PRESENT: {
        message: "Base URL is not injected through .env files",
        code: "UI__ERROR--1001"
    },
    REFRESH_TOKEN_INVALID_RESPONSE: {
        message: "Invalid refresh token response: missing required data",
        code: "UI__ERROR--1002"
    },
    REFRESH_TOKEN_NETWORK_FAILED: {
        message: "Failed to refresh token due to network error",
        code: "UI__ERROR--1003"
    },
    REFRESH_TOKEN_MAX_RETRIES_EXCEEDED: {
        message: "Refresh token failed after maximum retry attempts",
        code: "UI__ERROR--1004"
    }
} as const;