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

export const openNotification = data =>{
    return{
        type: types.OPEN_NOTIFICATION,
        payload: data
    };
};

export const closeNotification = data =>{
    return{
        type: types.CLOSE_NOTIFICATION,
        payload: data
    };
};

export const toggleErrorWindowIsOpen = () => ({type: types.TOGGLE_ERROR_WINDOW_IS_OPEN});

