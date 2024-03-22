import styles from './ArticleCommentsList.module.css';
import CommentCard from '@entities/commentCard/ui/CommentCard';

function ArticleCommentsList() {
  return (
    <section className={styles.articleCommentsList}>
      <h3 className={styles.title}>Comments</h3>
      <ul></ul>
    </section>
  );
}

export default ArticleCommentsList;
