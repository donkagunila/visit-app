import {IConstants} from "../types/constants.ts";

export const Constants: IConstants = {
    API_TIMEOUT: 5000,
    API_URLS: {
        DEFAULT: import.meta.env.VITE_API_URL,
        SOCKET: import.meta.env.VITE_SOCKET_URL,
    }
}