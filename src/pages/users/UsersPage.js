import React from 'react';
import {Button} from 'antd';
import {connect} from "react-redux";
import {logout} from "../../store/actions/authActions";

const UsersPage = ({logout}) => {
    const handleLogout = () => {
        logout();
    };
    return (
      <div>
          <h1>USERS</h1>
          <Button onClick={handleLogout}>Logout</Button>
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
