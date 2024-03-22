import Button from '@shared/ui/button/Button';
import styles from './QualityPromo.module.css';
import mobilePhoto from '@shared/assets/images/mobilePhoto.png';
import arrowTopFood from '@shared/assets/svg/arrowTopFood.svg';

function QualityPromo() {
  return (
    <section className={styles.qualityPromo}>
      <div className={styles.containerSection}>
        <img src={mobilePhoto} alt="Мобильный телефон с приложением" className={styles.mobilePhoto} loading="lazy" />
        <article className={styles.article}>
          <h2 className={styles.title}>
            Premium <span className={styles.titleSpan}>Quality</span> For Your Health
          </h2>
          <ul className={styles.list}>
            <li className={styles.description}>
              Premium quality food is made with ingredients that are packed with essential vitamins, minerals.
            </li>
            <li className={styles.description}>
              These foods promote overall wellness by support healthy digestion and boosting immunity
            </li>
          </ul>
          <div className={styles.containerBtn}>
            <Button textBtn="Download" classSecondary={styles.classBtnSecondary} ariaLabel='Кнопка "Download"' />
            <img src={arrowTopFood} alt="Декоротивная стрелка" className={styles.arrowTopFood} />
          </div>
        </article>
      </div>
    </section>
  );
}

export default QualityPromo;
