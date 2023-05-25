import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
        reducerPath: 'usersApi',
        baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
        // refetchOnFocus: true,
        endpoints: builder => ({
                        getUsers: builder.query({
                            query: () => ({ url: 'users' }),
                        }),
                        getUserData: builder.query({
                            query: (id) => ({ url: `users/${id}` }),
                        })
        }),
});

export const {useGetUsersQuery, useGetUserDataQuery , useLazyGetUserDataQuery} = usersApi;
export const useGetUserDataQueryStateResult = usersApi?.endpoints?.getUserData.useQueryState;
