import createReducer from './createReducer';
import actionsTypes from '../actionsTypes';

const initialState = {
  status: null, // error | warning | default,
  title: '',
  message: ''
};

const alertReducer = createReducer(initialState, {
  [actionsTypes.SET_ALERT]: (state, { payload }) => {
    if (!payload) payload = {};
    const { status = null, title = '', message = ''} = payload;

    return {
      status,
      title,
      message
    };
  }
});

export default alertReducer;
