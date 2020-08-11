import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL || '';
const loginUrl = process.env.REACT_APP_LOGIN_URL || '';

console.log('--base url: ', baseUrl);
console.log('--loginUrl url: ', loginUrl);

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
    return axios.get('/cyberhat_users');
};
