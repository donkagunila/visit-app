import {useEffect} from 'react';

const Notifier = () => {
    useEffect(() => {
        // Request permission to show notifications
        if (Notification.permission === 'default') {
            void Notification.requestPermission();
        }
    }, []);

    const sendNotification = () => {
        if (Notification.permission === 'granted') {
            new Notification('Hello!', {
                body: 'This is a test notification from your React app.',
                icon: '/img/logo.svg',
            });
        } else {
            console.warn('Notification permission denied.');
        }
    };

    return (
        <div>
            <button onClick={sendNotification}>Send Notification</button>
        </div>
    );
};

export default Notifier;