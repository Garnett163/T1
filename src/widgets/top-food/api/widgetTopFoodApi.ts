import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Recipes } from './types';

export const widgetTopFoodApi = createApi({
  reducerPath: 'widgetTopFoodApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: builder => ({
    getTopFood: builder.query<Recipes, void>({
      query: () => `recipes/meal-type/dinner`,
    }),
  }),
});

export const { useGetTopFoodQuery } = widgetTopFoodApi;
