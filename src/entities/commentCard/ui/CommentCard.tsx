import styles from './Comment.module.css';
import commentQuote from '@shared/assets/svg/commentCardQuotes.svg';
import { IComment } from '../model/types';

interface CommentCardProps {
  commentCard: IComment;
  classSecondary?: string;
}

function CommentCard({ commentCard, classSecondary }: CommentCardProps) {
  return (
    <li className={`${styles.commentCard} ${classSecondary || ''}`}>
      <div className={styles.containerComment}>
        <h4 className={styles.nickName}>@{commentCard.user.username}</h4>
        <img src={commentQuote} alt="Декоративные кавычки"></img>
      </div>
      <p className={styles.commentText}>{commentCard.body}</p>
    </li>
  );
}

export default CommentCard;
