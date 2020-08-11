import React from 'react';
import {Button} from 'antd';
import {connect} from 'react-redux';
import {logout} from '../../store/actions/authActions';
import style from './UsersPage.module.scss';

const UsersPage = ({logout}) => {
    const handleLogout = () => {
        logout();
    };
    return (
      <div className={style['users-page-wrapper']}>
          <div className='header'>
              <div className='title'>Organization Users</div>
              <Button onClick={handleLogout}>Logout</Button>
          </div>

      </div>
    );
};

// const mapStateToProps = state => {
//     return {
//         data: state.currData.data,
//     };
// };

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout())
    };
}

export default  connect(null, mapDispatchToProps)(UsersPage);
