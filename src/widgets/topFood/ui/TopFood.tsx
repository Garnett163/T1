import styles from './TopFood.module.css';
import FoodCard from '@entities/foodCard/ui/FoodCard';
import foodCardImage from '@shared/assets/images/foodCardImage.png';
import foodCardStar from '@shared/assets/svg/foodCardStar.svg';

function TopFood() {
  return (
    <section className={styles.topFood}>
      <div className={styles.containerSection}>
        <h2 className={styles.title}>
          Our Top <span className={styles.titleSpan}>Lunch</span>
        </h2>
        <ul className={styles.foodCardsList}>
          <FoodCard
            srcImage={foodCardImage}
            title="The Chicken King"
            time="24min"
            rating="4.8"
            icon={foodCardStar}
            typeFood="Pizza"
          />
          <FoodCard
            srcImage={foodCardImage}
            title="The Chicken King"
            time="24min"
            rating="4.8"
            icon={foodCardStar}
            typeFood="Pizza"
          />
          <FoodCard
            srcImage={foodCardImage}
            title="The Chicken King"
            time="24min"
            rating="4.8"
            icon={foodCardStar}
            typeFood="Pizza"
          />
        </ul>
      </div>
    </section>
  );
}

export default TopFood;
