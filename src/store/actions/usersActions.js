import types from '../actionsTypes';
import {setLoading, toggleErrorWindowIsOpen} from './uIStateActions';
import {fetchUsersApi} from '../../api';
import {setAlert} from './alertActions';

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
    dispatch(
        setAlert({
          status: 'error',
          title: 'Error',
          message: error.message
        })
    );
    dispatch(toggleErrorWindowIsOpen());
  }
};

export const setUsersToStore = data =>{
  return{
    type: types.SET_USERS_TO_STORE,
    payload: data
  };
};

export const deleteUser = data =>{
  return{
    type: types.DELETE_USER,
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
