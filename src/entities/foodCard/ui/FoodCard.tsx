import styles from './FoodCard.module.css';

interface FoodCardProps {
  srcImage: string;
  title: string;
  time: string;
  icon: string;
  rating: string;
  typeFood: string;
}

function FoodCard({ srcImage, title, time, icon, rating, typeFood }: FoodCardProps) {
  return (
    <li className={styles.foodCard}>
      <img src={srcImage} alt="Карточка еды" className={styles.img} loading="lazy" />
      <div className={styles.containerContent}>
        <p className={styles.typeFood}>{typeFood}</p>
        <div className={styles.containerFlex}>
          <h4 className={styles.title}>{title}</h4>
          <button className={styles.favoriteBtn} aria-label='Кнопка "Добавить в избранное"'></button>
        </div>
        <div className={styles.containerFlex}>
          <p className={styles.time}>{time}</p>
          <img src={icon} alt="Звездочка рейтинга"></img>
          <p className={styles.rating}>{rating}</p>
        </div>
      </div>
    </li>
  );
}

export default FoodCard;
