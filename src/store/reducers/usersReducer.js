import actionsTypes from '../actionsTypes';
import createReducer from '../reducers/createReducer';

const initialState = {
  users: [],
  error: null,
  isSuccess: null,
  isLoading: false,
};

const usersReducer = createReducer(initialState, {
  [actionsTypes.SET_USERS_TO_STORE]: (state, {payload}) => {
    return {
      ...state,
      users: payload
    };
  },
  [actionsTypes.SET_ERROR_TO_STORE]: (state, {payload}) => {
    return {
      ...state,
      error: payload
    };
  },
  [actionsTypes.SET_IS_SUCCESS]: (state, {payload}) => {
    return {
      ...state,
      isSuccess: payload
    };
  },
  [actionsTypes.SET_LOADING]: (state, {payload}) => {
    return {
      ...state,
      isLoading: payload
    };
  },
});

export default usersReducer;

