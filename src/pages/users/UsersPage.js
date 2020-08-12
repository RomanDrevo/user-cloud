import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {logout} from '../../store/actions/authActions';
import style from './UsersPage.module.scss';
import UserCard from '../../components/user-card/UserCard';
import {deleteUser, fetchUsers} from '../../store/actions/usersActions';
import {
    getErrorObject, getIsErrorWindowOpen,
    getIsModalVisible,
    getIsSuccessDeleteNotificationOpen,
    getUsers,
    isLoading
} from '../../store/selectors';
import Spinner from '../../components/spinner';
import PageLayout from '../../components/page-layout/PageLayout';
import EmptyState from '../../components/empty-state/EmptyState';
import { Modal, notification} from 'antd';
import {toggleDeleteUserModal} from '../../store/actions/uIStateActions';

const UsersPage = (
    {
        logout,
        fetchUsers,
        users,
        isLoading,
        deleteUser,
        isSuccessDeleteNotificationOpen,
        isModalVisible,
        toggleDeleteUserModal
    }
) => {

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleLogout = () => {
        logout();
    };

    const [user, setUser] = useState('');

    const handleDeleteUser = user => {
        toggleDeleteUserModal();
        setUser(user);
    };

    const handleOk = () => {
        deleteUser(user.objectId);
    };

    const handleCancel = () => {
        toggleDeleteUserModal();
    };

    useEffect(() => {
        if(isSuccessDeleteNotificationOpen){
            openNotification();
        }
    }, [isSuccessDeleteNotificationOpen]);

    const openNotification = () => {
        notification.open({
            message: '',
            duration: 3,
            description: `User ${user.FirstName} has been deleted.`,
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    return (
        <div className={style['users-page-wrapper']}>
            <PageLayout handleLogout={handleLogout}>
                <div className='title'>Organization Users</div>
                {
                    isLoading ? <Spinner/> :
                        users.length ?
                            <div className='users-list'>
                                {
                                    users.map(user => (
                                        <UserCard
                                            handleDeleteUser={handleDeleteUser}
                                            key={user.ID}
                                            user={user}
                                        />
                                    ))
                                }
                            </div>
                            : <EmptyState title='Oops!' description='No users found.'/>
                }
            </PageLayout>

            <Modal
                centered
                transparent
                title="User will be deleted!"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <h2>Are yoy sure?</h2>
            </Modal>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        users: getUsers(state),
        isLoading: isLoading(state),
        isModalVisible: getIsModalVisible(state),
        isSuccessDeleteNotificationOpen: getIsSuccessDeleteNotificationOpen(state),
    };
};

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout()),
        deleteUser: data => dispatch(deleteUser(data)),
        toggleDeleteUserModal: () => dispatch(toggleDeleteUserModal()),
        fetchUsers: () => dispatch(fetchUsers())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
