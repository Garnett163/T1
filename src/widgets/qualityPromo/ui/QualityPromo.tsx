import Button from '@shared/ui/button/Button';
import styles from './QualityPromo.module.css';
import mobilePhoto from '@shared/assets/images/mobilePhoto.png';
import arrowTopFood from '@shared/assets/svg/arrowTopFood.svg';

function QualityPromo() {
  return (
    <section className={styles.qualityPromo}>
      <div className={styles.containerSection}>
        <img src={mobilePhoto} alt="Мобильный телефон с приложением" className={styles.mobilePhoto}></img>
        <article className={styles.article}>
          <h2 className={styles.title}>
            Premium <span className={styles.titleSpan}>Quality</span> For Your Health
          </h2>
          <p className={styles.description}>
            Premium quality food is made with ingredients that are packed with essential vitamins, minerals.
          </p>
          <p className={styles.description}>
            These foods promote overall wellness by support healthy digestion and boosting immunity
          </p>
          <div className={styles.containerBtn}>
            <Button textBtn="Download" classSecondary={styles.classBtnSecondary} />
            <img src={arrowTopFood} alt="Декоротивная стрелка" className={styles.arrowTopFood}></img>
          </div>
        </article>
      </div>
    </section>
  );
}

export default QualityPromo;
