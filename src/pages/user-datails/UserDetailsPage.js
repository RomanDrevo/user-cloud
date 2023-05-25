import React from 'react';
import style from './UserDetailsPage.module.scss';
import PageLayout from '../../components/page-layout/PageLayout';
import {useGetUserDataQuery, useGetUserDataQueryStateResult} from '../../store/usersApi';

const UserDetailsPage = (props) => {
    // const {userId} = props.history.location?.state;
    const data = useGetUserDataQueryStateResult();
    // const {data} = useGetUserDataQueryStateResult();
    console.log('--->>>data666: ', data);
    // console.log('--->>>isLoading: ', isLoading);
    // console.log('--->>>isSuccess: ', isSuccess);
    // console.log('--->>>isError: ', isError);
    console.log('--->>>state: ', props.history.location);

    return (
      <div className={style['add-user-page-wrapper']}>
        <PageLayout>
          User Details
        </PageLayout>
      </div>
    );
};

export default UserDetailsPage;
