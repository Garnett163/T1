import styles from './Dashboard.module.css';
import DeliveryCard from '@entities/deliveryCard/ui/DeliveryCard';
import deliveryFoodImage from '@shared/assets/images/deliveryFood.png';
import purchasesDashboard from '@shared/assets/images/purchasesDashboard.png';
import deliveryFoodImage2 from '@shared/assets/images/deliveryFoodImage2.png';
import deliveryFoodImage3 from '@shared/assets/images/deliveryFoodImage3.png';

function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <div className={styles.containerSection}>
        <div className={styles.containerPL}>
          <h2 className={styles.title}>
            Control <span className={styles.titleSpan}>Purchases</span> Via Dashboard
          </h2>
          <ul className={styles.deliveryCardsList}>
            <DeliveryCard
              srcImage={deliveryFoodImage}
              title="Chicken Hell"
              status="On The Way"
              time="3:09 PM"
              classSecondary={styles.deliveryCard}
            />
            <DeliveryCard
              srcImage={deliveryFoodImage2}
              title="Swe dish"
              status="Delivered"
              time="Yesterday"
              classSecondary={styles.deliveryCard}
            />
            <DeliveryCard
              srcImage={deliveryFoodImage3}
              title="Fish Hell Veg"
              status="Cancelled"
              time="Yesterday"
              classSecondary={styles.deliveryCard}
            />
          </ul>
        </div>
        <img
          src={purchasesDashboard}
          alt="Application delivery panel image"
          className={styles.purchasesDashboard}
          loading="lazy"
        ></img>
      </div>
    </section>
  );
}

export default Dashboard;
