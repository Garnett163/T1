import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IArticle } from '@entities/articleCard/model/types';

export const widgetArticleContentApi = createApi({
  reducerPath: 'widgetArticleContentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: builder => ({
    getArticleById: builder.query<IArticle, { articleId: string | undefined }>({
      query: ({ articleId }) => `/posts/${articleId}`,
    }),
  }),
});

export const { useGetArticleByIdQuery } = widgetArticleContentApi;
