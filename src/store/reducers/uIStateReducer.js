import actionsTypes from '../actionsTypes';
import createReducer from './createReducer';

const initialState = {
    isLoading: false,
    isErrorWindowOpen: false,
    isModalVisible: false,
    isSuccessDeleteNotificationOpen: false
};

const UIStateReducer = createReducer(initialState, {
    [actionsTypes.SET_LOADING]: (state, {payload}) => {
        return {
            ...state,
            isLoading: payload
        };
    },
    [actionsTypes.TOGGLE_DELETE_USER_MODAL]: (state) => {
        return {
            ...state,
            isModalVisible: !state.isModalVisible
        };
    },
    [actionsTypes.OPEN_SUCCESS_DELETE_NOTIFICATION]: (state) => {
        return {
            ...state,
            isSuccessDeleteNotificationOpen: true
        };
    },
    [actionsTypes.TOGGLE_ERROR_WINDOW_IS_OPEN]: state => {
        return {
            ...state,
            isErrorWindowOpen: !state.isErrorWindowOpen
        };
    },
});

export default UIStateReducer;
