import { createSelector } from 'reselect';

export const getIsLoading = state => state.uIStateReducer?.isLoading;

export const getIsAppStarted = state => state?.uIStateReducer?.isAppStarted;

export const getUsers = state => state.usersReducer?.users;

export const getSearchText = state => state.usersReducer?.searchText;

export const getSearchResult = createSelector(getUsers, getSearchText, (users, text) => {
    return users?.filter(user => user.username.toLowerCase().includes(text)
        || user.name.toLowerCase().includes(text));

});

