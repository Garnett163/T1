import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { widgetTopFoodApi } from '@widgets/top-food/api/widgetTopFoodApi';
import { widgetFeedBackApi } from '@widgets/feed-back/api/widgetFeedBackApi';
import { widgetArticlesBlogApi } from '@widgets/articles-blog/api/widgetArticlesBlogApi';
import { widgetArticleContentApi } from '@widgets/article-content/api/widgetArticleContentApi';
import { entitiesArticleUserApi } from '@entities/articleUser/api/entitiesArticleUserApi';
import { widgetArticleCommentsListApi } from '@widgets/article-comments-list/api/widgetArticleCommentsListApi';
import { featuresAddCommentApi } from '@features/add-comment/api/featuresAddCommentApi';

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      widgetTopFoodApi.middleware,
      widgetFeedBackApi.middleware,
      widgetArticlesBlogApi.middleware,
      widgetArticleContentApi.middleware,
      entitiesArticleUserApi.middleware,
      widgetArticleCommentsListApi.middleware,
      featuresAddCommentApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
