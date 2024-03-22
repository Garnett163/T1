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
          <img src={userData?.image || userAvatar} alt="Аватар пользователя" className={styles.userAvatar} />
          <div>
            <p className={styles.writtenBy}>Written By</p>
            <p className={styles.author}>
              <span>{userData?.firstName || 'Машуля'}</span> <span>{userData?.lastName || 'Иванова'}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ArticleUser;
