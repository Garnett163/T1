import styles from './ArticleCard.module.css';
import ratingIcon from '@shared/assets/svg/ratingIcon.svg';
import { MAX_DESCRIPTION_LENGTH } from '@shared/constants';
import { smartCutText } from '@shared/lib/helpers';

interface ArticleCardProps {
  title: string;
  hashTags: string[];
  rating: number;
  description: string;
}

function ArticleCard({ title, hashTags, rating, description }: ArticleCardProps) {
  return (
    <li className={styles.articleCard}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.containerFlex}>
        <div className={styles.containerHashTags}>
          {hashTags.map((hashTag: string, index: number) => (
            <span className={styles.hashTags} key={index}>
              #{hashTag}
              {index !== hashTags.length - 1 && ','}
            </span>
          ))}
        </div>
        <div className={styles.containerRating}>
          <p className={styles.rating}>{rating}</p>
          <img src={ratingIcon} alt="Звездочка рейтинга" className={styles.ratingIcon} />
        </div>
      </div>
      <p className={styles.description}>{smartCutText(description, MAX_DESCRIPTION_LENGTH)}</p>
    </li>
  );
}

export default ArticleCard;
