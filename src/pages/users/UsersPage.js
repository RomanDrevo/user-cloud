import React, {useEffect} from 'react';
import {useDispatch, useSelector, } from 'react-redux';
import style from './UsersPage.module.scss';
import UserCard from '../../components/user-card/UserCard';
// import {fetchUsers} from '../../store/actions/usersActions';
import {getIsLoading, getUsers, getIsAppStarted} from '../../store/selectors';
import Spinner from '../../components/spinner';
import PageLayout from '../../components/page-layout/PageLayout';
import EmptyState from '../../components/empty-state/EmptyState';
import {toggleIsAppStarted} from '../../store/actions/uIStateActions';
import {fetchUsers} from '../../store/usersSlice';

const UsersPage = () => {

    // const {data, isLoading, isSuccess, isError, error} = useGetUsersQuery();

    // console.log('--->>>data: ', data);
    // console.log('--->>>isLoading: ', isLoading);
    // console.log('--->>>isSuccess: ', isSuccess);
    // console.log('--->>>isError: ', isError);
    // console.log('--->>>error: ', error);

    const isLoading = useSelector(getIsLoading);
    const users = useSelector(getUsers);
    const isAppStarted = useSelector(getIsAppStarted);
    console.log('--->>>users: ', users);
    const dispatch = useDispatch();

    const fetchUsersMethod = () => dispatch(fetchUsers());
    const toggleIsAppStartedMethod = () => dispatch(toggleIsAppStarted());

    useEffect(() => {
        toggleIsAppStartedMethod();
        if(!isAppStarted){
            fetchUsersMethod();
        }

    }, []);

    return (
      <PageLayout>
        <div className={style['users-page-wrapper']}>
          <div className='header'>
            <div className='title'>Organization Users</div>
            {/* <Search*/}
            {/*    placeholder="Search for a user"*/}
            {/*    onChange={handleOnSearchChange}*/}
            {/*    value={searchText}*/}
            {/*    style={{width: 230}}*/}
            {/*    className='user-search'*/}
            {/*    prefix={<SearchOutlined />}*/}
            {/*    suffix={''}*/}
            {/* />*/}
          </div>

          {
              isLoading ? <Spinner/> :
                  users.length ?
                    <div className='users-list'>
                      {
                          users.map(user => (
                            <UserCard
                                // handleDeleteUser={handleDeleteUser}
                                key={user.id}
                                user={user}
                            />
                          ))
                      }
                    </div>
                      : <EmptyState title='Oops!' description='No users found.'/>
          }
        </div>
      </PageLayout>

    );
};

export default UsersPage;
