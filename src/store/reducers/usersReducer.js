import actionsTypes from '../actionsTypes';
import createReducer from '../reducers/createReducer';

const initialState = {
  users: []
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
  }
});

export default usersReducer;

