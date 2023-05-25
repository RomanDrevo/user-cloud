import actionsTypes from '../actionsTypes';
import createReducer from '../reducers/createReducer';

const initialState = {
    selectedUsers: [],
    error: null,
    isSuccess: null,
    selectedId: null
    // isUserDetailsLoading: false
};

const userDetailsReducer = createReducer(initialState, {
    [actionsTypes.SET_USER_DETAILS_TO_STORE]: (state, {payload}) => {
        return {
            ...state,
            selectedUsers: [...state.selectedUsers, payload]
        };
    },
    // [actionsTypes.SET_LOADING]: (state, {payload}) => {
    //     return {
    //         ...state,
    //         isUserDetailsLoading: payload
    //     };
    // },
    // [actionsTypes.SET_ERROR_TO_STORE]: (state, {payload}) => {
    //     return {
    //         ...state,
    //         error: payload
    //     };
    // },
    // [actionsTypes.SET_IS_SUCCESS]: (state, {payload}) => {
    //     return {
    //         ...state,
    //         isSuccess: payload
    //     };
    // }
});

export default userDetailsReducer;

