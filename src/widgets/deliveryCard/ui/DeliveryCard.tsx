import styles from './DeliveryCard.module.css';

interface deliveryCardProps {
  srcImage: string;
  title: string;
  status: string;
  time: string;
  classSecondary?: string;
}

function deliveryCard({ srcImage, title, status, time, classSecondary }: deliveryCardProps) {
  return (
    <div className={`${styles.deliveryCard} ${classSecondary || ''}`}>
      <img className={styles.img} src={srcImage} alt={title}></img>
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.status}>{status}</p>
      </div>
      <span className={styles.time}>{time}</span>
    </div>
  );
}

export default deliveryCard;
