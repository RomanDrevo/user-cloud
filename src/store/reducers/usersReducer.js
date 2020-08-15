import actionsTypes from '../actionsTypes';
import createReducer from '../reducers/createReducer';

const initialState = {
  users: [],
  searchText: ''
};

const usersReducer = createReducer(initialState, {
  [actionsTypes.SET_USERS_TO_STORE]: (state, {payload}) => {
    return {
      ...state,
      users: payload
    };
  },
  [actionsTypes.DELETE_USER_SUCCESS]: (state, {payload}) => {
    return {
      ...state,
      users: state.users.filter(user => user.objectId !== payload)
    };
  },
  [actionsTypes.UPDATE_SEARCH]: (state, { payload }) => {
    return {
      ...state,
      searchText: payload
    };
  }
});

export default usersReducer;

