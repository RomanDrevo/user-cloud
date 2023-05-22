import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL || 'https://jsonplaceholder.typicode.com';
const loginUrl = process.env.REACT_APP_LOGIN_URL || '';

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  `Bearer ${token}`;
    config.baseURL = baseUrl;
    return config;
});

export const loginApi = () => {
    // const {username, password} = data;
    const data = {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
    };
    return axios.post(`${loginUrl}/api/login`, data);
};

export const fetchUsersApi = () => {
    return axios.get('/users');
};

export const deleteUserApi = data => {
    return axios.delete('/cyberhat_users', {data: {objectId: data.payload}});
};

export const createUserApi = data => {
    return axios.post('/cyberhat_users', {...data.payload});
};
