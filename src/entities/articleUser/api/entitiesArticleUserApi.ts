import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from './type';

export const entitiesArticleUserApi = createApi({
  reducerPath: 'entitiesArticleUserApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: builder => ({
    getUserById: builder.query<User, { id: string | undefined }>({
      query: ({ id }) => `/users/${id}`,
    }),
  }),
});

export const { useGetUserByIdQuery } = entitiesArticleUserApi;
