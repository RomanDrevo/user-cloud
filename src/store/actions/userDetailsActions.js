// import types from '../actionsTypes';
// import {fetchUserDetailsApi} from '../../api';
//
// export const fetchUserDetails =  (id) => async (dispatch) => {
//     try {
//         // dispatch(setUserDetailsLoading(true));
//
//         const response = await fetchUserDetailsApi(id);
//
//         if (response.status === 200 && response.data) {
//             dispatch(setUserDetailsToStore(response.data));
//         }
//
//         // dispatch(setUserDetailsLoading(false));
//
//     }
//     catch (error){
//         // dispatch(setUserDetailsLoading(false));
//         dispatch(setErrorToStore(error));
//         dispatch(setIsSuccess(false));
//     }
//     finally {
//         // dispatch(setUserDetailsLoading(false));
//         dispatch(setIsSuccess(true));
//     }
// };
//
// export const setUserDetailsToStore = data =>{
//     return{
//         type: types.SET_USER_DETAILS_TO_STORE,
//         payload: data
//     };
// };
//
// export const setErrorToStore = data =>{
//     return{
//         type: types.SET_ERROR_TO_STORE,
//         payload: data
//     };
// };
//
// export const setIsSuccess = data =>{
//     return{
//         type: types.SET_IS_SUCCESS,
//         payload: data
//     };
// };
//
// export const setUserDetailsLoading = data =>{
//     return{
//         type: types.SET_LOADING,
//         payload: data
//     };
// };