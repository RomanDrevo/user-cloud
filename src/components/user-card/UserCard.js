import React from 'react';
import style from './UserCard.module.scss';
import {Divider} from 'antd';
import {MailOutlined, DeleteOutlined} from '@ant-design/icons';
import {capitalizeFirstLetter} from '../../utils/helpers';

const UserCard = ({user, handleDeleteUser}) => {

    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const date = new Date(user.BirthDate * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const day = date.getDate();
    const handleOnClick = user => {
        handleDeleteUser(user);
    };

    return (
        <div className={style['user-card-wrapper']}>
            <div className='user-card'>
                <div className='cut-1'/>
                <div className='userpic-wrapper'>
                    <img alt='userpic' src={user.Photo}/>
                </div>
                <Divider className='divider'/>
                <div className='user-name'>{user.FirstName}</div>
                <div className='user-role'>{capitalizeFirstLetter(user.Role)}</div>
                <Divider className='divider'/>
                <div className='cut-2'/>
                <div className='user-details'>
                    <div className='user-id'>ID: {user.ID}</div>
                    <div className='user-birthday'>
                        Birthday: {day}/{month}/{year}
                    </div>
                    <div className='user-address'>
                        Address: {user.Address}
                    </div>
                </div>
                <Divider className='divider'/>
                <div className='user-email-wrapper'>
                    <div className='flex'>
                        <MailOutlined/>
                        <a href={`mailto:${user.Email}`} className='user-email'>{user.Email}</a>
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
