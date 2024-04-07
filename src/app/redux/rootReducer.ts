import { combineReducers } from '@reduxjs/toolkit';
import { widgetTopFoodApi } from '@widgets/top-food/api/widgetTopFoodApi';
import { widgetFeedBackApi } from '@widgets/feed-back/api/widgetFeedBackApi';
import { widgetArticlesBlogApi } from '@widgets/articles-blog/api/widgetArticlesBlogApi';
import { widgetArticleContentApi } from '@widgets/article-content/api/widgetArticleContentApi';
import { entitiesArticleUserApi } from '@entities/articleUser/api/entitiesArticleUserApi';
import { widgetArticleCommentsListApi } from '@widgets/article-comments-list/api/widgetArticleCommentsListApi';
import { featuresAddCommentApi } from '@features/add-comment/api/featuresAddCommentApi';

export const rootReducer = combineReducers({
  [widgetTopFoodApi.reducerPath]: widgetTopFoodApi.reducer,
  [widgetFeedBackApi.reducerPath]: widgetFeedBackApi.reducer,
  [widgetArticlesBlogApi.reducerPath]: widgetArticlesBlogApi.reducer,
  [widgetArticleContentApi.reducerPath]: widgetArticleContentApi.reducer,
  [entitiesArticleUserApi.reducerPath]: entitiesArticleUserApi.reducer,
  [widgetArticleCommentsListApi.reducerPath]: widgetArticleCommentsListApi.reducer,
  [featuresAddCommentApi.reducerPath]: featuresAddCommentApi.reducer,
});
