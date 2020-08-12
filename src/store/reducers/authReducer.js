// import _ from "lodash";
import actionsTypes from '../actionsTypes';
import createReducer from './createReducer';

const initialState = {
    status: null,
    serverError: null,
    userEmail: null,
    isAuthenticated: !!localStorage.getItem('token'),
};

const authReducer = createReducer(initialState, {
    [actionsTypes.SET_LOGIN_RESULT_TO_STORE]: (state, {payload}) => {
        if (payload.token) {
            return {
                ...state,
                isAuthenticated: true,
                ...payload
            };
        }
    },

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
    },

    [actionsTypes.TOGGLE_IS_FORGOT_PASSWORD_OPEN]: (state) => {
        return {
            ...state,
            isForgotPasswordModalOpen: !state.isForgotPasswordModalOpen
        };
    },

    [actionsTypes.TOGGLE_IS_RESET_PASSWORD_OPEN]: (state) => {
        return {
            ...state,
            isResetPasswordModalOpen: !state.isResetPasswordModalOpen
        };
    },

    [actionsTypes.TOGGLE_IS_RESET_PASSWORD_SUCCESS_OPEN]: (state) => {
        return {
            ...state,
            isResetPasswordSuccessModalOpen: !state.isResetPasswordSuccessModalOpen
        };
    },
});

export default authReducer;
