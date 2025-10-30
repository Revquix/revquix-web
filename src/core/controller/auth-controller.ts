import qs from 'qs';
import {RegisterRequest} from "@/src/core/payload/request/register-request";
import {ModuleResponse} from "@/src/core/payload/response/module-response";
import {baseAxios} from "@/src/core/axios/base-axios";
import {API_CONSTANTS} from "@/src/core/constants/api-constants";
import {AxiosResponse} from "axios";
import {RegistrationStatusResponse} from "@/src/core/payload/response/registration-status-response";
import {RegisterOtpRequest} from "@/src/core/payload/request/register-otp-request";
import {TokenRequest} from "@/src/core/payload/request/token-request";
import {AuthResponse, RefreshTokenResponse} from "@/src/core/payload/response/auth-response";
import {VerifyMfaRequest} from "@/src/core/payload/request/verify-mfa-request";

export class AuthController {

    static async register(data: RegisterRequest): Promise<ModuleResponse> {
        try {
            const response: AxiosResponse<ModuleResponse> = await baseAxios.post(API_CONSTANTS.REGISTER, qs.stringify(data), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            const moduleResponse: ModuleResponse = response.data;
            return moduleResponse;
        } catch (error) {
            throw error;
        }
    }

    static async registrationStatus(email: string): Promise<RegistrationStatusResponse> {
        try {
            const response: AxiosResponse<RegistrationStatusResponse> = await baseAxios.get(API_CONSTANTS.REGISTRATION_STATUS, {
                params: {
                    'email': email,
                }
            })
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async registerOtp(data: RegisterOtpRequest): Promise<ModuleResponse> {
        try {
            const response: AxiosResponse<ModuleResponse> = await baseAxios.post(API_CONSTANTS.REGISTER_OTP, qs.stringify(data), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            const moduleResponse: ModuleResponse = response.data;
            return moduleResponse;
        } catch (error) {
            throw error;
        }
    }

    static async token(data: TokenRequest): Promise<AuthResponse> {
        try {
            const response: AxiosResponse<AuthResponse> = await baseAxios.post(
                API_CONSTANTS.TOKEN,
                qs.stringify(data),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async verifyMfa(data: VerifyMfaRequest): Promise<AuthResponse> {
        try {
            const response: AxiosResponse<AuthResponse> = await baseAxios.post(
                API_CONSTANTS.VERIFY_MFA,
                data
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async refreshToken(): Promise<RefreshTokenResponse> {
        try {
            const response: AxiosResponse<RefreshTokenResponse> = await baseAxios.get(API_CONSTANTS.REFRESH_TOKEN);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async logout(): Promise<void> {
        try {
            await baseAxios.delete(API_CONSTANTS.LOGOUT);
        } catch (error) {
            throw error;
        }
    }
}