import types from '../actionsTypes';
import {setLoading} from './uIStateActions';
import {fetchUsersApi} from '../../api';

export const fetchUsers =  () => async (dispatch) => {
  try {
   dispatch(setLoading(true));
   const users = JSON.parse(localStorage.getItem('users'));

   if(users?.length){
      dispatch(setUsersToStore(users));
   }else {
       const response = await fetchUsersApi();

       if (response.status === 200 && response.data) {
        localStorage.setItem('users', JSON. stringify(response.data));
        dispatch(setUsersToStore(response.data));
       }
   }

   dispatch(setLoading(false));
  }catch (error){
    dispatch(setLoading(false));
    dispatch(setErrorToStore(error));
  }
};

export const setUsersToStore = data =>{
  return{
    type: types.SET_USERS_TO_STORE,
    payload: data
  };
};

export const setErrorToStore = data =>{
  return{
    type: types.SET_ERROR_TO_STORE,
    payload: data
  };
};

export const deleteUserSuccess = data =>{
  return{
    type: types.DELETE_USER_SUCCESS,
    payload: data
  };
};

export const createUser = data =>{
  console.log('--->>>data: ', data);
  return{
    type: types.CREATE_USER,
    payload: data
  };
};

export const updateSearch = data => {
  return {
    type: types.UPDATE_SEARCH,
    payload: data
  };
};
