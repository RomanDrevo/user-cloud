// import types from '../actionsTypes';
// import {fetchUsersApi} from '../../api';
//
// export const fetchUsers =  () => async (dispatch) => {
//   try {
//       dispatch(setLoading(true));
//
//       const response = await fetchUsersApi();
//
//       if (response.status === 200 && response.data) {
//           dispatch(setUsersToStore(response.data));
//       }
//
//       dispatch(setLoading(false));
//
//   }
//   catch (error){
//       dispatch(setLoading(false));
//       dispatch(setErrorToStore(error));
//       dispatch(setIsSuccess(false));
//   }
//   finally {
//       dispatch(setLoading(false));
//       dispatch(setIsSuccess(true));
//   }
// };
//
// export const setUsersToStore = data =>{
//   return{
//     type: types.SET_USERS_TO_STORE,
//     payload: data
//   };
// };
//
// export const setLoading = data =>{
//     return{
//         type: types.SET_LOADING,
//         payload: data
//     };
// };
//
//
//
//
