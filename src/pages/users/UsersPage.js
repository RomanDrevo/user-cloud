import React, {useEffect} from 'react';
import {Button} from 'antd';
import {connect} from 'react-redux';
import {logout} from '../../store/actions/authActions';
import style from './UsersPage.module.scss';
import UserCard from '../../components/user-card/UserCard';
import {fetchUsers} from '../../store/actions/usersActions';
import {getUsers, isLoading} from '../../store/selectors';
import Spinner from '../../components/spinner';
import PageLayout from '../../components/page-layout/PageLayout';
import EmptyState from "../../components/empty-state/EmptyState";

const UsersPage = ({logout, fetchUsers, users, isLoading}) => {

    useEffect(()=> {
        fetchUsers();
    }, []);

    const handleLogout = () => {
        logout();
    };

    return (
      <div className={style['users-page-wrapper']}>
          <PageLayout handleLogout={handleLogout}>
              <div className='title'>Organization Users</div>

              {
                  isLoading ? <Spinner /> :
                      users.length ?
                          <div className='users-list'>
                              {
                                  users.map(user => <UserCard key={user.ID} user={user} />)
                              }

                          </div>
                          : <EmptyState title='Oops!' description='No users found.' />
              }

          </PageLayout>

      </div>
    );
};

const mapStateToProps = state => {
    return {
        users: getUsers(state),
        isLoading: isLoading(state),
    };
};

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout()),
        fetchUsers: () => dispatch(fetchUsers())
    };
}

export default  connect(mapStateToProps, mapDispatchToProps)(UsersPage);
