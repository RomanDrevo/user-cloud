import { combineReducers } from 'redux';
import uIStateReducer from '../reducers/uIStateReducer';
import authReducer from '../reducers/authReducer';
import usersReducer from '../reducers/usersReducer';

export default combineReducers({
  uIStateReducer,
  authReducer,
  usersReducer
});
