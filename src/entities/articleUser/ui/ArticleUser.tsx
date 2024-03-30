import styles from './ArticleUser.module.css';
import PreloaderUserAvatar from '@shared/ui/preloaderUserAvatar/preloaderUserAvatar';
import userAvatar from '@shared/assets/images/userAvatarArticlePage.png';
import ErrorApi from '@shared/ui/errorApi/ErrorApi';
import { useGetUserByIdQuery } from '../api/entitiesArticleUserApi';

interface ArticleUserProps {
  userId?: number | undefined;
  classArticleBlog?: boolean;
}
function ArticleUser({ userId, classArticleBlog }: ArticleUserProps) {
  const { data: userData, isLoading, isError } = useGetUserByIdQuery({ id: userId?.toString() }, { skip: !userId });

  if (isError) return <ErrorApi errorApi={isError} textErrorApi="User not found" />;

  return (
    <div className={styles.containerAuthor}>
      {isLoading ? (
        <PreloaderUserAvatar classArticleBlog={classArticleBlog} />
      ) : (
        <>
          <img
            src={userData?.image || userAvatar}
            alt="Avatar user"
            className={`${classArticleBlog ? `${styles.userAvatar} ${styles.userAvatarBlog}` : styles.userAvatar}`}
          />
          <div>
            <p className={`${classArticleBlog ? `${styles.writtenBy} ${styles.writtenByBlog}` : styles.writtenBy}`}>
              Written By
            </p>
            <p className={`${classArticleBlog ? `${styles.author} ${styles.authorBlog}` : styles.author}`}>
              <span>{userData?.firstName}</span> <span>{userData?.lastName}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ArticleUser;
