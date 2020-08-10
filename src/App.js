import React, {useEffect} from 'react';
import style from './css/App.scss';
import {connect} from 'react-redux';
import PageLayout from './components/pageLayout/PageLayout';
import {Route, Switch} from 'react-router-dom';
import LoginPage from "./pages/login/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import UsersPage from "./pages/users/UsersPage";
// import {Route, Switch} from 'react-router-dom';

const App = () => {

  return (
      <div className={style['app-wrapper']}>
        <PageLayout>
          <div className="main-page-content">
              <Switch>
                  <ProtectedRoute path='/users' exact component={UsersPage}/>
                  <Route path='/login' exact component={LoginPage}/>
              </Switch>
          </div>
        </PageLayout>
      </div>
  );
};

// const mapStateToProps = state => {
//     return {
//         data: state.currData.data,
//     };
// };

// function mapDispatchToProps(dispatch) {
//     return {
//         fetchItems: () => dispatch(fetchItems())
//     };
// }

export default  connect(null, {})(App);
