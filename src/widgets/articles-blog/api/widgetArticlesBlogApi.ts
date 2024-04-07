import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Articles } from './types';

export const widgetArticlesBlogApi = createApi({
  reducerPath: 'widgetArticlesBlogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: builder => ({
    getArticles: builder.query<Articles, { limit: string; skip: string }>({
      query: ({ limit, skip }) => `posts?limit=${limit}&skip=${skip}&select=title,reactions,tags,body`,
    }),
  }),
});

export const { useGetArticlesQuery } = widgetArticlesBlogApi;
