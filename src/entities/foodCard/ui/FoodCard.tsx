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
      <img src={srcImage} alt="Карточка еды" className={styles.img} loading="lazy" />
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
          <button className={styles.favoriteBtn} aria-label='Кнопка "Добавить в избранное"'></button>
        </div>
        <div className={styles.containerRatingFlex}>
          <p className={styles.time}>{time}min</p>
          <img src={ratingIcon} alt="Звездочка рейтинга" />
          <p className={styles.rating}>{rating}</p>
        </div>
      </div>
    </li>
  );
}

export default FoodCard;
