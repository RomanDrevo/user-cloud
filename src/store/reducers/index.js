import { combineReducers } from 'redux';
import uIStateReducer from '../reducers/uIStateReducer';
import authReducer from '../reducers/authReducer';
import usersReducer from '../reducers/usersReducer';
import alertReducer from '../reducers/alertReducer';

export default combineReducers({
  uIStateReducer,
  authReducer,
  usersReducer,
  alertReducer
});
