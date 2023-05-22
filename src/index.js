import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import './css/index.scss';
import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import uIStateReducer from './store/reducers/uIStateReducer';
import authReducer from './store/reducers/authReducer';
import usersReducer from './store/reducers/usersReducer';
import alertReducer from './store/reducers/alertReducer';

const store = configureStore({
        reducer:{
            uIStateReducer,
            authReducer,
            usersReducer,
            alertReducer
        },
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk)
    });

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root'));

