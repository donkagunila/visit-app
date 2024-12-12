import {useEffect} from 'react';
import {io} from 'socket.io-client';
import {toast} from "react-toastify";
import {Constants} from "../config/env.ts";
import useNotifier from "./useNotification.tsx";

const usePushNotification = () => {

    const {sendNotification} = useNotifier();


    useEffect(() => {
        const socket = io(Constants.API_URLS.SOCKET);

        socket.on('receiveNotification', (data) => {
            toast(data.message, {
                toastId: 'notification',
                type: data.type
            });
            sendNotification({
                title: data.title ?? "Hi",
                message: data.message
            })
        });

        return () => {
            socket.disconnect();
        };
    }, []);
};

export default usePushNotification;
