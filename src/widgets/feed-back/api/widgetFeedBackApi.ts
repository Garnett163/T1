import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Comments } from './types';

export const widgetFeedBackApi = createApi({
  reducerPath: 'widgetFeedBackApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: builder => ({
    getComments: builder.query<Comments, { limit: string; skip: string }>({
      query: ({ limit, skip }) => `/comments?limit=${limit}&skip=${skip}&select=body,postId'`,
    }),
  }),
});

export const { useGetCommentsQuery } = widgetFeedBackApi;
