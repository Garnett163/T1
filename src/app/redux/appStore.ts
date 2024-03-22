import { configureStore } from '@reduxjs/toolkit';
import { widgetTopFoodApi } from '@widgets/top-food/api/widgetTopFoodApi';
import { widgetFeedBackApi } from '@widgets/feed-back/api/widgetFeedBackApi';
import { widgetArticlesBlogApi } from '@widgets/articles-blog/api/widgetArticlesBlogApi';
import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      widgetTopFoodApi.middleware,
      widgetFeedBackApi.middleware,
      widgetArticlesBlogApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
