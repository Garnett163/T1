import React from 'react';
import Button from '@shared/ui/button/Button';
import { useState } from 'react';
import styles from './AddComment.module.css';
import { CommentData } from '../api/types';
import { IComment } from '@entities/commentCard/model/types';
import { useAddCommentMutation } from '@features/add-comment/api/featuresAddCommentApi';
import Preloader from '@shared/ui/preloader/Preloader';
import ErrorApi from '@shared/ui/errorApi/ErrorApi';

interface AddCommentProps {
  id: string | undefined;
  comments: IComment[];
  setComments: (comments: IComment[]) => void;
}

function AddComment({ id, setComments, comments }: AddCommentProps) {
  const [createComment, { isLoading, isError }] = useAddCommentMutation();
  const [newComment, setNewComment] = useState<CommentData>({
    body: '',
    postId: id || '',
    userId: 1,
  });

  const handleAddComment = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      const response = await createComment(newComment).unwrap();
      setComments([...comments, response]);
    } catch (error) {
      console.log(error);
    }
  };

  function handleTextAreaChange(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    setNewComment(prev => ({ ...prev, body: evt.target.value }));
  }

  return (
    <div className={styles.addComment}>
      <h3 className={styles.title}>
        Add <span className={styles.titleSpan}>comment</span>
      </h3>
      {isLoading ? (
        <Preloader />
      ) : (
        <form className={styles.form} onSubmit={handleAddComment}>
          <textarea
            placeholder="ENTER YOUR COMMENT"
            className={styles.inputTextArea}
            onChange={handleTextAreaChange}
            required
            disabled={isLoading}
          />
          <Button textBtn="Send" classSecondary={styles.sendBtn} disabled={isLoading} />
        </form>
      )}
      <ErrorApi errorApi={isError} textErrorApi="An error occurred while adding a comment"></ErrorApi>
    </div>
  );
}

export default AddComment;
