import React from 'react';
import style from './UserCard.module.scss';
import {Divider} from 'antd';
import {MailOutlined} from '@ant-design/icons';

import {useLazyGetUserDataQuery, useGetUserDataQuery} from '../../store/usersApi';

const UserCard = ({user}) => {

    const [fetchUserData, {isLoading, data, isSuccess}] = useLazyGetUserDataQuery();
    // const {isLoading, data, isSuccess} = useGetUserDataQuery(user.id);

    console.log('--->>>user details: ', data);

    const handleOnClick = () => {
        fetchUserData(user.id);
    };

    return (
      <div className={style['user-card-wrapper']} onClick={handleOnClick}>
        <div className='user-card'>
          <div className='cut-1'/>
          <Divider className='divider'/>
          <div className='user-name'>{user.name}</div>
          <div className='user-role'>Role</div>
          <Divider className='divider'/>
          <div className='cut-2'/>
          <div className='user-details'>
            <div className='user-id'>ID: {user.id}</div>
            {
                data?.email &&
                <div className='user-birthday'>
                  Email: {data.email}
                </div>
            }

            {
                  data?.address &&
                  <div className='user-address'>
                    Address: {data.address.street}
                  </div>
            }

          </div>
          <Divider className='divider'/>
          <div className='user-email-wrapper'>
            <div className='flex'>
              <MailOutlined/>
              <a href={`mailto:${user.email}`} className='user-email'>{user.Email}</a>
            </div>
          </div>
        </div>

      </div>
    );
};

export default UserCard;
