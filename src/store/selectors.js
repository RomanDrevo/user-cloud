
export const getIsLoading = state => state.uIStateReducer?.isLoading;
export const getIsAppStarted = state => state?.uIStateReducer?.isAppStarted;
export const getUsers = state => state.usersReducer?.users;

export const getErrorObject = state => state?.usersReducer.error;
export const getIsSuccess = state => state?.usersReducer.isSuccess;

