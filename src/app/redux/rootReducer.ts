import { combineReducers } from '@reduxjs/toolkit';
import { widgetTopFoodApi } from '@widgets/top-food/api/widgetTopFoodApi';
import { widgetFeedBackApi } from '@widgets/feed-back/api/widgetFeedBackApi';
import { widgetArticlesBlogApi } from '@widgets/articles-blog/api/widgetArticlesBlogApi';

export const rootReducer = combineReducers({
  [widgetTopFoodApi.reducerPath]: widgetTopFoodApi.reducer,
  [widgetFeedBackApi.reducerPath]: widgetFeedBackApi.reducer,
  [widgetArticlesBlogApi.reducerPath]: widgetArticlesBlogApi.reducer,
});
