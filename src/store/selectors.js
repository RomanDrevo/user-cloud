export const isLoading = state => state.uIStateReducer?.isLoading;

export const isAuthenticated = state => state.authReducer?.isAuthenticated;

export const getUsers = state => state.usersReducer?.users;
