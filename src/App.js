import React from 'react';
import style from './css/App.scss';
import {Route, Switch} from 'react-router-dom';
import UsersPage from './pages/users/UsersPage';

const App = () => {
    return (

      <div className={style['app-wrapper']}>
        <div className="main-page-content">
          <Switch>
            <Route path='/' exact component={UsersPage}/>
            {/* <Route path='/add-user' exact component={AddUserPage}/>*/}
          </Switch>
        </div>
      </div>
    );
};

export default App;
