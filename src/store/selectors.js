export const isLoading = state => state.uIStateReducer?.isLoading;
export const getIsModalVisible = state => state.uIStateReducer?.isModalVisible;
export const getIsSuccessDeleteNotificationOpen = state => state.uIStateReducer?.isSuccessDeleteNotificationOpen;

export const isAuthenticated = state => state.authReducer?.isAuthenticated;

export const getUsers = state => state.usersReducer?.users;
