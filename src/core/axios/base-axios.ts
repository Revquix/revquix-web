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

export const baseAxios = axios.create({
    baseURL: getBaseURL(),
    withCredentials: true,
    timeout: 10000
});