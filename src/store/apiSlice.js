import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
        endpoints: builder => ({
                getUsers: builder.query({
                query: () => ({ url: 'users' }),
            }),
        }),
});

export const {useGetUsersQuery} = apiSlice;