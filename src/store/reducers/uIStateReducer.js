import actionsTypes from '../actionsTypes';
import createReducer from './createReducer';

const initialState = {
    isLoading: false,
    isAppStarted: false
};

const UIStateReducer = createReducer(initialState, {
    [actionsTypes.SET_LOADING]: (state, {payload}) => {
        return {
            ...state,
            isLoading: payload
        };
    },
    [actionsTypes.TOGGLE_IS_APP_STARTED]: state => {
        return {
            ...state,
            isAppStarted: true
        };
    },
});

export default UIStateReducer;
