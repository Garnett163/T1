type UserCommentCard = {
  id?: number;
  username: string;
};

export type ICommentCard = {
  body: string;
  id?: number;
  postId?: number;
  user: UserCommentCard;
};
