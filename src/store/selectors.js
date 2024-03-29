import { createSelector } from 'reselect';

export const getIsLoading = state => state.uIStateReducer?.isLoading;
export const getIsModalVisible = state => state.uIStateReducer?.isModalVisible;
export const getIsNotificationOpen = state => state.uIStateReducer?.isNotificationOpen;
export const getIsErrorWindowOpen = state => state?.uIStateReducer?.isErrorWindowOpen;
export const getNotificationMessage = state => state?.uIStateReducer?.notificationMessage;

export const isAuthenticated = state => state.authReducer?.isAuthenticated;

export const getUsers = state => state.usersReducer?.users;
export const getSearchText = state => state.usersReducer?.searchText;
export const getSearchResult = createSelector(getUsers, getSearchText, (users, text) => {
    return users?.filter(user => user.username.toLowerCase().includes(text)
        || user.name.toLowerCase().includes(text));

});

export const getErrorObject = state => state?.alertReducer;

