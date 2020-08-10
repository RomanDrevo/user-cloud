import actionsTypes from '../actionsTypes';
import createReducer from './createReducer';

const initialState = {
    isLoading: false,
    isErrorWindowOpen: false,
    isSvgDead: false
};

const UIStateReducer = createReducer(initialState, {
    [actionsTypes.SET_LOADING]: (state, {payload}) => {
        return {
            ...state,
            isLoading: payload
        };
    },
    [actionsTypes.TOGGLE_ERROR_WINDOW_IS_OPEN]: state => {
        return {
            ...state,
            isErrorWindowOpen: !state.isErrorWindowOpen
        };
    },
    [actionsTypes.TOGGLE_KILL_SVG]: state => {
        return {
            ...state,
            isSvgDead: !state.isSvgDead
        };
    },
});

export default UIStateReducer;
