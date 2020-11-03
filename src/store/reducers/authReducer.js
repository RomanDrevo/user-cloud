import actionsTypes from '../actionsTypes';
import createReducer from './createReducer';

const initialState = {
    status: null,
    serverError: null,
    userEmail: null,
    isAuthenticated: true,
};

const authReducer = createReducer(initialState, {
    [actionsTypes.LOGIN_SUCCESS]: (state, {payload}) => {
        return {
            ...state,
            isAuthenticated: true,
            userEmail: payload
        };
    },
    [actionsTypes.LOG_OUT]: (state) => {
        localStorage.removeItem('token');
        return {
            ...state,
            isAuthenticated: false
        };
    },
    [actionsTypes.SET_IS_AUTHENTICATED]: (state, {payload}) => {
        return {
            ...state,
            isAuthenticated: payload
        };
    }
});

export default authReducer;
