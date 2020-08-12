import {Button, Modal} from 'antd';
import React from 'react';

const ErrorModalBody = ({message, handleErrorModalCancel, title}) => (
    <div className='login-errors flex flex-column items-center'>
        <div className='error-title'>{title}</div>
        <div className='error-body'>{message}</div>
        <Button onClick={handleErrorModalCancel}>OK</Button>
    </div>
);

const ModalWindow = ({visible, icon, onCancel, message, handleErrorModalCancel, title}) => {
    return (
        <Modal
            centered
            footer={null}
            transparent
            visible={visible}
            onCancel={onCancel}
        >
            <ErrorModalBody
                title={title}
                message={message}
                handleErrorModalCancel={handleErrorModalCancel}
                icon={icon}
            />
        </Modal>
    );
};

export default ModalWindow;
