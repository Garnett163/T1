import { ICommentCard } from '@entities/commentCard/model/types';

export type Comments = {
  limit: number;
  comments: ICommentCard[];
  skip: number;
  total: number;
};
