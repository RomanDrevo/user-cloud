import actionsTypes from '../actionsTypes';

export const setAlert = data => {
  return {
    type: actionsTypes.SET_ALERT,
    payload: data
  };
};
