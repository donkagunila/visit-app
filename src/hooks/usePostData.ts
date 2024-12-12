import {useState} from "react";
import {toast} from "react-toastify";
import {Constants} from "../config/env.ts";
import {HttpClient} from "../utils/httpClient.ts";
import {useAppSelector} from "../stores/hooks.ts";
import {getUserAuthDetails} from "../stores/authSlice.ts";

interface IPostData {
    actionTitle: string;
    onSuccessText: string;
    onErrorText: string;
    api?: string;
}

const usePostData = (props: IPostData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const authDetails = useAppSelector(getUserAuthDetails);


    const postData = async (url: string, data: any) => {
        setIsLoading(true);
        setError(null);
        try {


            const apiUrl = props.api ?? Constants.API_URLS.DEFAULT;

            if (authDetails) {

                const customHeaders = {
                    Authorization: `Bearer ${authDetails.token}`,
                };

                const response = await HttpClient(apiUrl, customHeaders)
                    .post(url, data)
                    .then((res) => {
                        setError(null);
                        toast.success(props.onSuccessText, {
                            toastId: "OPERATION_SUCCESSFUL"
                        })
                        return res;
                    })
                    .catch((error: any) => {
                        setError(error.response.data.message)
                        toast.error(error.response.data.message, {
                            toastId: "ERROR_POSTING_DATA"
                        })
                        throw new Error(error.response.data.message);
                    });

                checkData(response.data);


                return await response.data;
            }
        } catch (error: any) {
            setError(error.message)
            toast.error(error.message, {
                toastId: "ERROR_POSTING_DATA"
            })

        } finally {
            setIsLoading(false);
        }
    };
    const updateData = async (url: string, data: any) => {
        setIsLoading(true);
        setError(null);
        try {


            const apiUrl = props.api ?? Constants.API_URLS.DEFAULT;

            if (authDetails) {

                const customHeaders = {
                    Authorization: `Bearer ${authDetails.token}`,
                };

                const response = await HttpClient(apiUrl, customHeaders)
                    .patch(url, data)
                    .then((res) => {
                        setError(null);
                        toast.success(props.onSuccessText, {
                            toastId: "OPERATION_SUCCESSFUL"
                        })
                        return res;
                    })
                    .catch((error: any) => {
                        setError(error.response.data.message)
                        toast.error(error.response.data.message, {
                            toastId: "ERROR_POSTING_DATA"
                        })
                        throw new Error(error.response.data.message);
                    });

                checkData(response.data);


                return await response.data;
            }
        } catch (error: any) {
            setError(error.message)
            toast.error(error.message, {
                toastId: "ERROR_POSTING_DATA"
            })

        } finally {
            setIsLoading(false);
        }
    };
    return {postData, updateData, isLoading, error};
};


function checkData(response: any) {


    if (!response.status) {
        throw Error(response?.statusText ?? "Internal Server Error")
    }

    if (response.status === 201) {
        return;
    }
    console.log(response)
    if (!response.data) throw Error(response?.statusText);
}

export default usePostData;
