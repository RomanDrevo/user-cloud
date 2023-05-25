import types from '../actionsTypes';

export const setLoading = data =>{
    return{
        type: types.SET_LOADING,
        payload: data
    };
};

export const toggleIsAppStarted = () =>{
    return{
        type: types.TOGGLE_IS_APP_STARTED
    };
};

export const closeNotification = data =>{
    return{
        type: types.CLOSE_NOTIFICATION,
        payload: data
    };
};

export const toggleErrorWindowIsOpen = () => ({type: types.TOGGLE_ERROR_WINDOW_IS_OPEN});

