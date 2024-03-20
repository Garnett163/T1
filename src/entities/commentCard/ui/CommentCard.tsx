import styles from './Comment.module.css';
import commentQuote from '@shared/assets/svg/commentCardQuotes.svg';
import { ICommentCard } from '../model/types';

interface CommentCardProps {
  commentCard: ICommentCard;
}

function CommentCard({ commentCard }: CommentCardProps) {
  return (
    <li className={styles.commentCard}>
      <div className={styles.containerComment}>
        <h4 className={styles.nickName}>{commentCard.user.username}</h4>
        <img src={commentQuote} alt="Декоративные кавычки"></img>
      </div>
      <p className={styles.commentText}>{commentCard.body}</p>
    </li>
  );
}

export default CommentCard;
