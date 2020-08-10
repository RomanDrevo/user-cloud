import actionsTypes from '../actionsTypes';
import createReducer from './createReducer';

const initialState = {
    isLoading: false,
    isErrorWindowOpen: false,
};

const UIStateReducer = createReducer(initialState, {
    [actionsTypes.SET_LOADING]: (state, {payload}) => {
        return {
            ...state,
            isLoading: payload
        };
    }
});

export default UIStateReducer;
