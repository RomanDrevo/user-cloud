import types from '../actionsTypes';

export const login = data =>{
  return{
    type: types.LOGIN,
    payload: data
  };
};

export const logout = () => ({type: types.LOG_OUT});

export const setIsAuthenticated = data => {
  return{
    type: types.SET_IS_AUTHENTICATED,
    payload: data
  };
};

export const loginSuccess = data => {
  return{
    type: types.LOGIN_SUCCESS,
    payload: data
  };
};

