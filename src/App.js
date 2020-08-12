import React, {useEffect} from 'react';
import style from './css/App.scss';
import {connect} from 'react-redux';
import PageLayout from './components/page-layout/PageLayout';
import {Route, Switch} from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import UsersPage from './pages/users/UsersPage';
import {capitalizeFirstLetter} from './utils/helpers';
import ModalWindow from './components/modal-window/ModalWindow';
import {getErrorObject, getIsErrorWindowOpen} from './store/selectors';
import {toggleErrorWindowIsOpen} from './store/actions/uIStateActions';

const App = ({isErrorWindowOpen, errorObject, toggleErrorWindowIsOpen}) => {

    const handleErrorModalCancel = () => {
        toggleErrorWindowIsOpen();
    };

    return (
        <div className={style['app-wrapper']}>
            <ModalWindow
                visible={isErrorWindowOpen}
                title={capitalizeFirstLetter(errorObject.title)}
                message={errorObject.message}
                handleErrorModalCancel={handleErrorModalCancel}
            />
            <div className="main-page-content">
                <Switch>
                    <ProtectedRoute path='/' exact component={UsersPage}/>
                    <Route path='/login' exact component={LoginPage}/>
                </Switch>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isErrorWindowOpen: getIsErrorWindowOpen(state),
        errorObject: getErrorObject(state),
    };
};

function mapDispatchToProps(dispatch) {
    return {
        toggleErrorWindowIsOpen: () => dispatch(toggleErrorWindowIsOpen()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
