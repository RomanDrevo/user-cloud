import React from 'react';
import style from './UserCard.module.scss';
import {Divider} from 'antd';

const UserCard = () => {
    return(
        <div className={style['user-card-wrapper']}>
            <div className='user-card'>
                <div className='cut-1' />
                <div className='userpic-wrapper'>
                    <img />
                </div>
                <Divider className='divider' />
                <div className='user-name'>John Doe</div>
                <div className='user-role'>VP R&D</div>
                <Divider className='divider' />
                <div className='cut-2' />
                <div className='user-details'>
                    <div className='user-id'>ID: 1234757499</div>
                    <div className='user-birthday'>1/4/33</div>
                    <div className='user-address'>25 Menachem, Floor 4, Apt 567</div>
                </div>
            </div>

        </div>
    );
};

export default UserCard;
