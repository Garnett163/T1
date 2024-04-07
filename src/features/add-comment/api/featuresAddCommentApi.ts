import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CommentData } from './types';

export const featuresAddCommentApi = createApi({
  reducerPath: 'featuresAddCommentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: builder => ({
    addComment: builder.mutation({
      query: (commentData: CommentData) => {
        return {
          headers: {
            'Content-Type': 'application/json',
          },
          url: `/comments/add`,
          method: 'POST',
          body: commentData,
        };
      },
    }),
  }),
});

export const { useAddCommentMutation } = featuresAddCommentApi;
