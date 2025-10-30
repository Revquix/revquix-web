export const API_CONSTANTS = {
    REGISTER: '/v1/auth/register',
    REGISTRATION_STATUS: '/v1/auth/registration-status',
    REGISTER_OTP: '/v1/auth/register-otp',
    TOKEN: '/v1/auth/token',
    VERIFY_MFA: '/v1/auth/verify-mfa',
    REFRESH_TOKEN: '/v1/auth/refresh-token',
} as const;