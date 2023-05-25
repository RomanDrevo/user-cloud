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

