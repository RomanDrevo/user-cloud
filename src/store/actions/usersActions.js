import types from '../actionsTypes';
import {setLoading} from './uIStateActions';
import {fetchUsersApi} from '../../api';

export const fetchUsers =  () => async (dispatch) => {
  try {
      dispatch(setLoading(true));

      const response = await fetchUsersApi();

      if (response.status === 200 && response.data) {
          dispatch(setUsersToStore(response.data));
      }

      dispatch(setLoading(false));

  }
  catch (error){
    dispatch(setLoading(false));
    dispatch(setErrorToStore(error));
  }
  finally {
      dispatch(setLoading(false));
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
