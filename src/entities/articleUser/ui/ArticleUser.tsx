import styles from './ArticleUser.module.css';
import PreloaderUserAvatar from '@shared/ui/preloaderUserAvatar/preloaderUserAvatar';
import userAvatar from '@shared/assets/images/userAvatarArticlePage.png';
import { useGetUserByIdQuery } from '../api/entitiesArticleUserApi';

interface ArticleUserProps {
  userId: number | undefined;
}
function ArticleUser({ userId }: ArticleUserProps) {
  const { data: userData, isLoading } = useGetUserByIdQuery({ id: userId?.toString() });

  return (
    <div className={styles.containerAuthor}>
      {isLoading ? (
        <PreloaderUserAvatar />
      ) : (
        <>
          <img src={userData?.image || userAvatar} alt="Avatar user" className={styles.userAvatar} />
          <div>
            <p className={styles.writtenBy}>Written By</p>
            <p className={styles.author}>
              <span>{userData?.firstName || 'Maria'}</span> <span>{userData?.lastName || 'Ivanova'}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ArticleUser;
