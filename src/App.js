import React from 'react';
import style from './css/App.scss';
import {Switch, Route} from 'react-router-dom';
// import ProtectedRoute from './ProtectedRoute';
import UsersPage from './pages/users/UsersPage';
import AddUserPage from './pages/add-user/AddUserPage';
import UserDetailsPage from './pages/user-datails/UserDetailsPage';

const App = () => {
    return (

      <div className={style['app-wrapper']}>
        <div className="main-page-content">
          <Switch>
            <Route path='/' exact component={UsersPage}/>
            <Route path='/add-user' exact component={AddUserPage}/>
            <Route path='/user-details' exact component={UserDetailsPage}/>
          </Switch>
        </div>
      </div>
    );
};

export default App;
