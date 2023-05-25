
export const getIsUsersLoading = state => state.usersReducer?.isLoading;
export const getUsers = state => state.usersReducer?.users;

export const getUserDetails = (state, userId) => {
    if(state.userDetailsReducer?.selectedUsers.length){
        return state.userDetailsReducer?.selectedUsers?.find(user => user.id === userId);
    }
    
};

export const getErrorObject = state => state?.usersReducer.error;
export const getIsSuccess = state => state?.usersReducer.isSuccess;

