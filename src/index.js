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
import {usersReducer} from './store/usersSlice';
import {usersApi} from './store/usersApi';
import {setupListeners} from '@reduxjs/toolkit/query';

const store = configureStore({
        reducer:{
            [usersApi.reducerPath]: usersApi.reducer,
            uIStateReducer,
            usersReducer,
        },
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(usersApi.middleware)
    });

setupListeners(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root'));

