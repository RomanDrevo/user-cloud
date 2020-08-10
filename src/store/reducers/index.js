import { combineReducers } from "redux";
import uIStateReducer from "../reducers/uIStateReducer";
import authReducer from "../reducers/authReducer";

export default combineReducers({
  uIStateReducer,
  authReducer
});
