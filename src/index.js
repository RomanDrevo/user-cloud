import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import './css/index.scss';
import {configureStore} from '@reduxjs/toolkit';
import {usersApi} from './store/usersApi';
import {setupListeners} from '@reduxjs/toolkit/query';

const store = configureStore({
        reducer:{
            [usersApi.reducerPath]: usersApi.reducer,
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

