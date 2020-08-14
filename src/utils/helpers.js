import {notification} from 'antd';

export const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export const openNotification = notificationMessage => {
    notification.open({
        message: '',
        duration: 3,
        description: notificationMessage,
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
};
