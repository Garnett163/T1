import styles from './ArticleCard.module.css';
import ratingIcon from '@shared/assets/svg/ratingIcon.svg';

interface ArticleCardProps {
  title: string;
  hashTags: string;
  rating: string;
  description: string;
}

function ArticleCard({ title, hashTags, rating, description }: ArticleCardProps) {
  return (
    <li className={styles.articleCard}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.containerFlex}>
        <span className={styles.hashTags}>{hashTags}</span>
        <div className={styles.containerRating}>
          <p className={styles.rating}>{rating}</p>
          <img src={ratingIcon} alt="Звездочка рейтинга" className={styles.ratingIcon} />
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </li>
  );
}

export default ArticleCard;
