import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import style from './UsersPage.module.scss';
import UserCard from '../../components/user-card/UserCard';
import {fetchUsers} from '../../store/actions/usersActions';
import {getIsAppStarted, getIsLoading, getIsSuccess, getUsers} from '../../store/selectors';
import Spinner from '../../components/spinner';
import PageLayout from '../../components/page-layout/PageLayout';
import EmptyState from '../../components/empty-state/EmptyState';
import {toggleIsAppStarted} from '../../store/actions/uIStateActions';

const UsersPage = () => {

    const isLoading = useSelector(getIsLoading);
    const isSuccess = useSelector(getIsSuccess);
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

    if(isLoading) return <Spinner/>;

    return (
      <PageLayout>
        <div className={style['users-page-wrapper']}>
          <div className='header'>
            <div className='title'>Organization Users</div>
          </div>

          {
              !isSuccess ? <div>Error!</div> :
                  users.length ?
                    <div className='users-list'>
                      {
                          users.map(user => (
                            <UserCard
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
