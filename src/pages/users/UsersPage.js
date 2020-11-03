import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector, connect} from 'react-redux';
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
    getIsLoading
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

const UsersPage = () => {

    const isLoading = useSelector(state => getIsLoading(state));
    const searchResult = useSelector(state => getSearchResult(state));
    const isNotificationOpen = useSelector(state => getIsNotificationOpen(state));
    const isModalVisible = useSelector(state => getIsModalVisible(state));
    const searchText = useSelector(state => getSearchText(state));
    const notificationMessage = useSelector(state => getNotificationMessage(state));

    const dispatch = useDispatch();

    const fetchUsersMethod = () => dispatch(fetchUsers());
    const closeNotificationMethod = () => dispatch(closeNotification());
    const toggleDeleteUserModalMethod = () => dispatch(toggleDeleteUserModal());
    const logoutMethod = () => dispatch(logout());
    const deleteUserMethod = id => dispatch(deleteUser(id));
    const updateSearchMethod = text => dispatch(updateSearch(text));

    useEffect(() => {
        fetchUsersMethod();
        closeNotificationMethod();
    }, []);

    const handleLogout = () => {
        logoutMethod();
    };

    const [user, setUser] = useState('');

    const handleDeleteUser = user => {
        toggleDeleteUserModalMethod();
        setUser(user);
    };

    const handleOk = () => {
        deleteUserMethod(user.objectId);
    };

    const handleCancel = () => {
        toggleDeleteUserModalMethod();
    };

    useEffect(() => {
        if (isNotificationOpen && notificationMessage === NOTIFICATIONS.delete) {
            openNotification(notificationMessage);
        }
    }, [isNotificationOpen]);

    const handleOnSearchChange = e => {
        updateSearchMethod(e.target.value);
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

export default UsersPage;
