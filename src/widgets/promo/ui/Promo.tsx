import Button from '@shared/ui/button/Button';
import DeliveryCard from '@widgets/deliveryCard/ui/DeliveryCard';
import styles from './Promo.module.css';
import plateFood from '@shared/assets/images/plateFood.png';
import deliveryFoodImage from '@shared/assets/images/deliveryFood.png';
import GraphicDeliveryFood from '@shared/assets/images/graphPromo.png';

function Promo() {
  return (
    <section className={styles.promo}>
      <article className={styles.article}>
        <p className={styles.textUsers}>OVER 1000 USERS</p>
        <h1 className={styles.title}>
          Enjoy Foods All Over The <span className={styles.titleSpan}>World</span>
        </h1>
        <p className={styles.description}>
          EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up
          to two days early. Get a <span className={styles.descriptionSpan}>$20 bonus</span>.
        </p>
        <div className={styles.containerBtns}>
          <Button textBtn="Get Started" />
          <Button textBtn="Go Pro" classSecondary={styles.classBtnSecondary} />
        </div>
      </article>
      <div className={styles.containerFood}>
        <img src={plateFood} alt="Тарелка с едой" className={styles.plateFood} />
        <DeliveryCard
          srcImage={deliveryFoodImage}
          title="Chicken Hell"
          status="On The Way"
          time="3:09 PM"
          classSecondary={styles.deliveryCard}
        />
        <img src={GraphicDeliveryFood} alt="График доставки еды" className={styles.graphicFood} />
      </div>
    </section>
  );
}

export default Promo;
