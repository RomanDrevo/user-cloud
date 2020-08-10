import types from '../actionsTypes';

export const fetchItems = data =>{
  return{
    type: types.FETCH_ITEMS,
    payload: data
  };
};

export const setItems = data =>{
  return{
    type: types.SET_ITEMS,
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

