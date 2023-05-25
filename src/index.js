import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import './css/index.scss';
import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import usersReducer from './store/reducers/usersReducer';
import userDetailsReducer from './store/reducers/userDetailsReducer';

const store = configureStore({
        reducer:{
            usersReducer,
            userDetailsReducer
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

