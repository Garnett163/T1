import styles from './FoodCard.module.css';
import ratingIcon from '@shared/assets/svg/ratingIcon.svg';

interface FoodCardProps {
  srcImage: string;
  title: string;
  time: number;
  rating: number;
  typeFood: string[];
}

function FoodCard({ srcImage, title, time, rating, typeFood }: FoodCardProps) {
  return (
    <li className={styles.foodCard}>
      <img src={srcImage} alt={title} className={styles.img} loading="lazy" />
      <div className={styles.containerContent}>
        <div className={styles.containerTagsFlex}>
          {typeFood.map((type: string, index: number) => (
            <p className={styles.typeFood} key={index}>
              {type}
            </p>
          ))}
        </div>
        <div className={styles.containerFlexTitle}>
          <h4 className={styles.title}>{title}</h4>
          <button className={styles.favoriteBtn} aria-label='Button "Add to favorites"'></button>
        </div>
        <div className={styles.containerRatingFlex}>
          <p className={styles.time}>{time}min</p>
          <img src={ratingIcon} alt="Star rating" />
          <p className={styles.rating}>{rating}</p>
        </div>
      </div>
    </li>
  );
}

export default FoodCard;
