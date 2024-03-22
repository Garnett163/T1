import { IComment } from '@entities/commentCard/model/types';
export type Comments = {
  limit: number | string;
  comments: IComment[];
  skip: number | string;
  total: number;
};
