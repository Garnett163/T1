import { IArticleCard } from '@entities/articleCard/model/types';
export type Articles = {
  limit: number | string;
  posts: IArticleCard[];
  skip: number | string;
  total: number;
};
