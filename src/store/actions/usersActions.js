import types from '../actionsTypes';

export const fetchUsers = data =>{
  return{
    type: types.FETCH_USERS,
    payload: data
  };
};

export const setUsersToStore = data =>{
  return{
    type: types.SET_USERS_TO_STORE,
    payload: data
  };
};

export const deleteUser = data =>{
  console.log(data);
  return{
    type: types.DELETE_USER,
    payload: data
  };
};

export const deleteUserSuccess = data =>{
  console.log(data);
  return{
    type: types.DELETE_USER_SUCCESS,
    payload: data
  };
};

