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

export const addItem = data =>{
  return{
    type: types.ADD_ITEM,
    payload: data
  };
};

export const editItem = data =>{
  return{
    type: types.EDIT_ITEM,
    payload: data
  };
};

