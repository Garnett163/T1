import styles from './ArticleContent.module.css';
import { Link } from 'react-router-dom';
import userAvatar from '@shared/assets/images/userAvatarArticlePage.png';
import ratingIcon from '@shared/assets/svg/ratingIcon.svg';

function ArticleContent() {
  return (
    <section className={styles.articleContent}>
      <div className={styles.containerSection}>
        <h2 className={styles.title}>How To Order Food On eatly ?</h2>
        <div className={styles.containerAuthorInfo}>
          <div className={styles.containerAuthor}>
            <img src={userAvatar} alt="Аватар пользователя" />
            <div>
              <p className={styles.writtenBy}>Written By</p>
              <p className={styles.author}>Terry Medhurst</p>
            </div>
          </div>
          <div className={styles.containerRatingAndHash}>
            <div className={styles.containerRating}>
              <p className={styles.ratingNumber}>7</p>
              <img src={ratingIcon} alt="Звездочка рейтинга" />
            </div>
            <div>
              <span className={styles.hashTags}>#history, #food</span>
            </div>
          </div>
        </div>
        <p className={styles.authorText}>
          It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she
          was telling himself. The reality was that it was time to panic and there wasn't time to salvage the situation,
          but he continued to delude himself into believing there was.
        </p>
        <Link to="/blog" className={styles.redirectOnBlog}>
          All Articles
        </Link>
      </div>
    </section>
  );
}

export default ArticleContent;
