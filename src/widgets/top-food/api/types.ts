import { IFoodCard } from '@entities/foodCard/model/types';

export type Recipes = {
  limit: number;
  recipes: IFoodCard[];
  skip: number;
  total: number;
};
