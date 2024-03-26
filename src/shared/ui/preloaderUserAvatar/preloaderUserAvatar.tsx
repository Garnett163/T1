import styles from './preloaderUserAvatar.module.css';

interface PreloaderUserAvatarProps {
  classArticleBlog?: boolean;
}

function preloaderUserAvatar({ classArticleBlog }: PreloaderUserAvatarProps) {
  return <div className={`${classArticleBlog ? `${styles.loader} ${styles.loaderBlog}` : styles.loader}`}>loading</div>;
}

export default preloaderUserAvatar;
