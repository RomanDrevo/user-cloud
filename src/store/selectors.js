
export const getIsUsersLoading = state => state.usersReducer?.isLoading;
export const getUsers = state => state.usersReducer?.users;

export const getUserDetails = (state, userId) => {
    return  userId === state.userDetailsReducer?.userDetails.id && state.userDetailsReducer?.userDetails;
};

export const getErrorObject = state => state?.usersReducer.error;
export const getIsSuccess = state => state?.usersReducer.isSuccess;

