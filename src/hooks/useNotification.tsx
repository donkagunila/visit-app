import {useEffect} from 'react';

interface Props {
    title: string;
    message: string
}

const useNotifier = () => {
    useEffect(() => {
        // Request permission to show notifications
        if (Notification.permission === 'default') {
            void Notification.requestPermission();
        }
    }, []);

    const sendNotification = ({title, message}: Props) => {
        if (Notification.permission === 'granted') {
            new Notification(title, {
                body: message,
                icon: '/img/logo.svg',
            });
        } else {
            console.warn('Notification permission denied.');
        }
    };

    return {
        sendNotification
    };
};

export default useNotifier;