import { IArticle } from '@entities/articleCard/model/types';
export type Articles = {
  limit: number | string;
  posts: IArticle[];
  skip: number | string;
  total: number;
};
