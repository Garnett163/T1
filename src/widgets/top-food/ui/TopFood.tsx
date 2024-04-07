import styles from './TopFood.module.css';
import { useEffect, useState } from 'react';
import FoodCard from '@entities/foodCard/ui/FoodCard';
import { IFoodCard } from '@entities/foodCard/model/types';
import { useGetTopFoodQuery } from '../api/widgetTopFoodApi';
import Preloader from '@shared/ui/preloader/Preloader';
import ErrorApi from '@shared/ui/errorApi/ErrorApi';
import { START_INDEX, END_INDEX_TOP_FOOD } from '@shared/constants';

function TopFood() {
  const { data: recipesData, isError, isLoading } = useGetTopFoodQuery();
  const [foodCards, setFoodCards] = useState<IFoodCard[]>([]);

  useEffect(() => {
    const recipes = recipesData?.recipes;
    if (recipes) {
      const sortedFoodCards = [...recipesData.recipes].sort((a: IFoodCard, b: IFoodCard) => b.rating - a.rating);
      const topThreeFoodCards = sortedFoodCards.slice(START_INDEX, END_INDEX_TOP_FOOD);
      setFoodCards(topThreeFoodCards);
    } else if (isError) {
      console.log(`Произошла ошибка при загрузки данных`);
    }
  }, [isError, recipesData]);

  return (
    <section className={styles.topFood} id="recipes">
      <div className={styles.containerSection}>
        <h2 className={styles.title}>
          Our Top <span className={styles.titleSpan}>Lunch</span>
        </h2>
        {isLoading ? (
          <Preloader />
        ) : (
          <ul className={styles.foodCardsList}>
            {foodCards.map((foodCard: IFoodCard) => (
              <FoodCard
                key={foodCard.id}
                title={foodCard.name}
                rating={foodCard.rating}
                time={foodCard.cookTimeMinutes}
                typeFood={foodCard.mealType}
                srcImage={foodCard.image}
              />
            ))}
          </ul>
        )}

        <ErrorApi errorApi={isError} textErrorApi="An error occurred while loading data" />
      </div>
    </section>
  );
}

export default TopFood;
