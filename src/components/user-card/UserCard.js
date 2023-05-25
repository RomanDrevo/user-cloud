import React from 'react';
import style from './UserCard.module.scss';
import {Divider} from 'antd';
import {MailOutlined, DeleteOutlined} from '@ant-design/icons';

const UserCard = ({user, handleDeleteUser}) => {

    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.

    const handleOnClick = user => {
        handleDeleteUser(user);
    };

    return (
      <div className={style['user-card-wrapper']}>
        <div className='user-card'>
          <div className='cut-1'/>
          <Divider className='divider'/>
          <div className='user-name'>{user.name}</div>
          <div className='user-role'>Role</div>
          <Divider className='divider'/>
          <div className='cut-2'/>
          <div className='user-details'>
            <div className='user-id'>ID: {user.id}</div>
            <div className='user-birthday'>
              Email: {user.email}
            </div>
            <div className='user-address'>
              Address: {user.address.street}
            </div>
          </div>
          <Divider className='divider'/>
          <div className='user-email-wrapper'>
            <div className='flex'>
              <MailOutlined/>
              <a href={`mailto:${user.email}`} className='user-email'>{user.Email}</a>
            </div>
            <button className='delete-user' onClick={() => handleOnClick(user)}>
              <DeleteOutlined/>
            </button>
          </div>
        </div>

      </div>
    );
};

export default UserCard;
