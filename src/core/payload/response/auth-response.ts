export type AuthResponse = {
    mfaToken?: string;
    accessToken?: string;
    expiresIn: number;
    userId: string;
    tokenType: string;
    expiresOn: number;
}