import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL || '';

axios.interceptors.request.use(function (config) {
    // const token = localStorage.getItem('token');
    // config.headers.Authorization =  `Bearer ${token}`;
    config.baseURL = baseUrl;
    return config;
});

export const fetchItemsApi = () => {
    return axios.get('/posts');
};

export const loginApi = () => {
    // const {username, password} = data;
    const data = {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
    };
    return axios.post('/api/login', data)
};
