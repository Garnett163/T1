import { configureStore } from '@reduxjs/toolkit';

import { widgetTopFoodApi } from '@widgets/topFood/api/widgetTopFoodApi';
import { widgetFeedBack } from '@widgets/feedBack/api/widgetFeedBack';

export const store = configureStore({
  reducer: {
    [widgetTopFoodApi.reducerPath]: widgetTopFoodApi.reducer,
    [widgetFeedBack.reducerPath]: widgetFeedBack.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(widgetTopFoodApi.middleware, widgetFeedBack.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
