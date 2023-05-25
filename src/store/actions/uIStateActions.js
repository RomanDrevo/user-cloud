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

export const openNotification = data =>{
    return{
        type: types.OPEN_NOTIFICATION,
        payload: data
    };
};

