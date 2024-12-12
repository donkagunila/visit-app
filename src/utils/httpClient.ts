import axios from "axios";
import {Constants} from "../config/env.ts";

export const HttpClient = (
    apiUrl: string = Constants.API_URLS.DEFAULT ?? "-",
    customHeaders?: Record<string, string>
) => {
    const userToken = localStorage.getItem("CREDITPRO_TOKEN");

    if (userToken) {
        customHeaders = {
            Authorization: `Bearer ${userToken}`,
            ...customHeaders
        };
    }
    const instance = axios.create({
        baseURL: apiUrl,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...customHeaders
        },
        timeout: Number(Constants.API_TIMEOUT ?? 5000)
    });

    return {
        get: async (url: string, params?: any): Promise<any> => {
            return await instance.get(url, {params});
        },
        post: async (url: string, data: any): Promise<any> => {
            return await instance.post(url, data);
        },
        put: async (url: string, data: any): Promise<any> => {
            return await instance.put(url, data);
        },
        delete: async (url: string): Promise<any> => {
            return await instance.delete(url);
        },
        deleteData: async (url: string, data: any): Promise<any> => {
            return await instance.delete(url, {data});
        },
        patch: async (url: string, data: any): Promise<any> => {
            return await instance.patch(url, data);
        },
        request: async (config: any): Promise<any> => {
            return await instance.request(config);
        }
    };
};
