import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchUsersApi} from '../api';

const initialState = {
    users: [],
    error: null,
    loading: false
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await fetchUsersApi();
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch users');
    }
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        createUser (state, action)  {
            state.users.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                localStorage.setItem('users', JSON. stringify(action.payload));
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const usersActions = usersSlice.actions;
export const usersReducer = usersSlice.reducer;