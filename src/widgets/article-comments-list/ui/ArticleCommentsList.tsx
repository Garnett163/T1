import styles from './ArticleCommentsList.module.css';
import { useState, useEffect } from 'react';
import { IComment } from '@entities/commentCard/model/types';
import CommentCard from '@entities/commentCard/ui/CommentCard';
import Preloader from '@shared/ui/preloader/Preloader';
import ErrorApi from '@shared/ui/errorApi/ErrorApi';
import AddComment from '@features/add-comment/ui/AddComment';
import { useGetCommentsByPostIdQuery } from '../api/widgetArticleCommentsListApi';

interface ArticleCommentsListProps {
  id: string | undefined;
}

function ArticleCommentsList({ id }: ArticleCommentsListProps) {
  const { data: commentsData, isError, isLoading } = useGetCommentsByPostIdQuery({ articleId: id });
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    if (commentsData) {
      setComments(commentsData.comments);
    } else if (isError) {
      console.log('Произошла ошибка при загрузке данных');
    }
  }, [commentsData, isError]);

  return (
    <section className={styles.articleCommentsList}>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <h3 className={styles.title}>Comments</h3>
          <ul className={styles.commentsList}>
            {comments.map(comment => (
              <CommentCard key={comment.id} commentCard={comment} classSecondary={styles.secondaryCommentCard} />
            ))}
          </ul>
        </>
      )}
      <ErrorApi errorApi={isError} textErrorApi="An error occurred while loading data" />
      <AddComment id={id} comments={comments} setComments={setComments} />
    </section>
  );
}

export default ArticleCommentsList;
