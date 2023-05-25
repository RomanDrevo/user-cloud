import React, {useState} from 'react';
import style from './UserCard.module.scss';
import {Divider} from 'antd';
import {MailOutlined, DeleteOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserDetails} from '../../store/actions/userdetailsActions';
import {getUserDetails} from '../../store/selectors';

const UserCard = ({user}) => {

  const userDetails = useSelector(getUserDetails);
  // const selectedId = useSelector(getSelectedId);

  // console.log('--->>>userDetails: ', userDetails);

  const dispatch = useDispatch();

  const fetchUserDetailsMethod = () => dispatch(fetchUserDetails(user.id));

    const handleOnClick = () => {
      fetchUserDetailsMethod();
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
              user.id === userDetails.id && userDetails?.email &&
              <div className='user-birthday'>
                Email: {userDetails.email}
              </div>
            }
            {/* <div className='user-address'>*/}
            {/*  Address: {user.address.street}*/}
            {/* </div>*/}
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
