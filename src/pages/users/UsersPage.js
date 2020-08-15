import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {logout} from '../../store/actions/authActions';
import style from './UsersPage.module.scss';
import UserCard from '../../components/user-card/UserCard';
import {deleteUser, fetchUsers, updateSearch} from '../../store/actions/usersActions';
import {
    getIsModalVisible,
    getIsNotificationOpen,
    getNotificationMessage,
    getSearchResult,
    getSearchText,
    isLoading
} from '../../store/selectors';
import Spinner from '../../components/spinner';
import PageLayout from '../../components/page-layout/PageLayout';
import EmptyState from '../../components/empty-state/EmptyState';
import {Modal, Input} from 'antd';
import {closeNotification, toggleDeleteUserModal} from '../../store/actions/uIStateActions';
import {openNotification} from '../../utils/helpers';
import {NOTIFICATIONS} from '../../utils/constatns';
import {SearchOutlined} from '@ant-design/icons';

const {Search} = Input;

const UsersPage = (
    {
        logout,
        fetchUsers,
        searchResult,
        isLoading,
        deleteUser,
        isNotificationOpen,
        isModalVisible,
        toggleDeleteUserModal,
        notificationMessage,
        closeNotification,
        updateSearch,
        searchText
    }
) => {

    useEffect(() => {
        fetchUsers();
        closeNotification();
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
        if (isNotificationOpen && notificationMessage === NOTIFICATIONS.delete) {
            openNotification(notificationMessage);
        }
    }, [isNotificationOpen]);

    const handleOnSearchChange = e => {
        updateSearch(e.target.value);
    };

    return (

        <PageLayout handleLogout={handleLogout}>
            <div className={style['users-page-wrapper']}>
                <div className='header'>
                    <div className='title'>Organization Users</div>
                    <Search
                        placeholder="Search for a user"
                        onChange={handleOnSearchChange}
                        value={searchText}
                        style={{width: 230}}
                        className='user-search'
                        prefix={<SearchOutlined />}
                        suffix={''}
                    />
                </div>

                {
                    isLoading ? <Spinner/> :
                        searchResult.length ?
                            <div className='users-list'>
                                {
                                    searchResult.map(user => (
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
                <Modal
                    centered
                    transparent
                    title="User will be deleted!"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <h2>Are you sure?</h2>
                </Modal>
            </div>
        </PageLayout>

    );
};

const mapStateToProps = state => {
    return {
        isLoading: isLoading(state),
        isModalVisible: getIsModalVisible(state),
        isNotificationOpen: getIsNotificationOpen(state),
        searchText: getSearchText(state),
        searchResult: getSearchResult(state),
        notificationMessage: getNotificationMessage(state),
    };
};

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout()),
        deleteUser: data => dispatch(deleteUser(data)),
        toggleDeleteUserModal: () => dispatch(toggleDeleteUserModal()),
        closeNotification: () => dispatch(closeNotification()),
        updateSearch: data => dispatch(updateSearch(data)),
        fetchUsers: () => dispatch(fetchUsers())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
