import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Comments } from './types';

export const widgetArticleCommentsListApi = createApi({
  reducerPath: 'widgetArticleCommentsListApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: builder => ({
    getCommentsByPostId: builder.query<Comments, { articleId: string | undefined }>({
      query: ({ articleId }) => `/comments/post/${articleId}`,
    }),
  }),
});

export const { useGetCommentsByPostIdQuery } = widgetArticleCommentsListApi;
