type UserCommentCard = {
  id?: number;
  username: string;
};

export type IComment = {
  body: string;
  id?: number;
  postId?: number;
  user: UserCommentCard;
};
