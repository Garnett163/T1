import { combineReducers } from '@reduxjs/toolkit';
import { widgetTopFoodApi } from '@widgets/topFood/api/widgetTopFoodApi';

export const rootReducer = combineReducers({
  [widgetTopFoodApi.reducerPath]: widgetTopFoodApi.reducer,
});
