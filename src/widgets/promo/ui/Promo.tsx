import Button from '@shared/ui/button/Button';
import DeliveryCard from '@entities/deliveryCard/ui/DeliveryCard';
import styles from './Promo.module.css';
import plateFood from '@shared/assets/images/plateFood.png';
import deliveryFoodImage from '@shared/assets/images/deliveryFood.png';
import graphicDeliveryFood from '@shared/assets/images/graphPromo.png';
import arrowPromo from '@shared/assets/svg/arrowPromo.svg';
import linesPromoBot from '@shared/assets/svg/linesPromoBot.svg';
import linesPromoTop from '@shared/assets/svg/linesPromoTop.svg';
function Promo() {
  return (
    <section className={styles.promo}>
      <div className={styles.containerSection}>
        <article className={styles.article}>
          <p className={styles.textUsers}>OVER 1000 USERS</p>
          <h1 className={styles.title}>
            Enjoy Foods All Over The <span className={styles.titleSpan}>World</span>
          </h1>
          <p className={styles.description}>
            EatLy help you set saving goals, earn cash back offers, Go to&nbsp;disclaimer for more details and get
            paychecks up to&nbsp;two days early. Get a&nbsp;
            <span className={styles.descriptionSpan}>$20&nbsp;bonus</span>.
          </p>
          <div className={styles.containerBtns}>
            <Button textBtn="Get Started" ariaLabel='Button "Get Started"' />
            <Button textBtn="Go Pro" classSecondary={styles.classBtnSecondary} ariaLabel='Button "Go Pro"' />
          </div>
        </article>
        <div className={styles.containerFood}>
          <img src={plateFood} alt="Plate of food" className={styles.plateFood} />
          <DeliveryCard
            srcImage={deliveryFoodImage}
            title="Chicken Hell"
            status="On The Way"
            time="3:09 PM"
            classSecondary={styles.deliveryCard}
          />
          <img src={graphicDeliveryFood} alt="Food delivery schedule" className={styles.graphicFood} />
          <img src={arrowPromo} alt="Decorative arrow" className={styles.arrowPromo} />
          <img src={linesPromoBot} alt="Decorative lines" className={styles.linesPromoBot} />
          <img src={linesPromoTop} alt="Decorative lines" className={styles.linesPromoTop} />
        </div>
      </div>
    </section>
  );
}

export default Promo;
