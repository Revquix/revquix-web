import RevquixException from "@/src/core/exception/revquix-exception";
import {ERROR_CONSTANTS} from "@/src/core/constants/error-constants";
import axios from "axios";

function getBaseURL() {
    const url = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!url) {
        throw new RevquixException(ERROR_CONSTANTS.BASE_URL_NOT_PRESENT);
    }
    return url;
}

function getOSDetails() {
    if (typeof globalThis.window === 'undefined') {
        // Server-side rendering
        return 'Server';
    }

    const userAgent = navigator.userAgent;

    if (userAgent.includes('Win')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';

    return 'Unknown';
}

function getBrowserDetails() {
    if (typeof globalThis.window === 'undefined') {
        // Server-side rendering
        return 'Server';
    }

    const userAgent = navigator.userAgent;

    if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
        return 'Chrome';
    }
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
    if (userAgent.includes('Edg')) return 'Edge';
    if (userAgent.includes('Opera') || userAgent.includes('OPR')) return 'Opera';

    return 'Unknown';
}

export const baseAxios = axios.create({
    baseURL: getBaseURL(),
    withCredentials: true,
    timeout: 10000
});

// Add request interceptor to include OS and browser details in headers
baseAxios.interceptors.request.use(
    (config) => {
        config.headers['Revquix-Web-OS'] = getOSDetails();
        config.headers['Revquix-Web-Browser'] = getBrowserDetails();
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
