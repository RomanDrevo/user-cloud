import types from '../actionsTypes';

export const setLoading = data =>{
    return{
        type: types.SET_LOADING,
        payload: data
    };
};

export const toggleDeleteUserModal = () =>{
    return{
        type: types.TOGGLE_DELETE_USER_MODAL
    };
};

export const openSuccessDeleteNotification = () =>{
    return{
        type: types.OPEN_SUCCESS_DELETE_NOTIFICATION
    };
};

export const toggleErrorWindowIsOpen = () => ({type: types.TOGGLE_ERROR_WINDOW_IS_OPEN});

