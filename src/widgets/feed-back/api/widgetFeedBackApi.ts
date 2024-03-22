import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Comments } from './types';

export const widgetFeedBackApi = createApi({
  reducerPath: 'widgetFeedBackApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: builder => ({
    getComments: builder.query<Comments, void>({
      query: () => `/comments`,
    }),
  }),
});

export const { useGetCommentsQuery } = widgetFeedBackApi;
