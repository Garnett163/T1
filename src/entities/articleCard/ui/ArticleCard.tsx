import ArticleUser from '@entities/articleUser/ui/ArticleUser';
import styles from './ArticleCard.module.css';
import ratingIcon from '@shared/assets/svg/ratingIcon.svg';
import { Link } from 'react-router-dom';
import { MAX_DESCRIPTION_LENGTH } from '@shared/constants';
import { smartCutText } from '@shared/lib/helpers';

interface ArticleCardProps {
  id?: number;
  title: string;
  hashTags: string[];
  rating: number;
  description: string;
  userId: number | undefined;
}

function ArticleCard({ id, title, hashTags, rating, description, userId }: ArticleCardProps) {
  return (
    <Link to={`/blog/article/${id}`} className={styles.articleCardLink}>
      <li className={styles.articleCard}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.containerFlexUser}>
          <ArticleUser userId={userId} classArticleBlog={true} />
          <div className={styles.containerRating}>
            <p className={styles.rating}>{rating}</p>
            <img src={ratingIcon} alt="Star rating" className={styles.ratingIcon} />
          </div>
        </div>
        <div className={styles.containerHashTags}>
          {hashTags.map((hashTag: string, index: number) => (
            <span className={styles.hashTags} key={index}>
              #{hashTag}
              {index !== hashTags.length - 1 && ','}
            </span>
          ))}
        </div>
        <p className={styles.description}>{smartCutText(description, MAX_DESCRIPTION_LENGTH)}</p>
      </li>
    </Link>
  );
}

export default ArticleCard;
