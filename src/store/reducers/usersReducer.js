import actionsTypes from '../actionsTypes';
import createReducer from '../reducers/createReducer';

const initialState = {
    users: [],
    searchText: '',
    error: null
};

const usersReducer = createReducer(initialState, {
    [actionsTypes.SET_USERS_TO_STORE]: (state, {payload}) => {
    return {
      ...state,
      users: payload
    };
  },
    [actionsTypes.CREATE_USER]: (state, {payload}) => {
    console.log('--->>>payload: ', payload);
    return {
      ...state,
      users: [...state.users, payload]
    };
  },
    [actionsTypes.SET_ERROR_TO_STORE]: (state, {payload}) => {
        return {
            ...state,
            error: payload
        };
    },

});

export default usersReducer;

