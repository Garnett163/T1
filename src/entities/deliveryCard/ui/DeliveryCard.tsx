import React from 'react';
import styles from './DeliveryCard.module.css';

interface deliveryCardProps {
  srcImage: string;
  title: string;
  status: string;
  time: string;
  classSecondary?: string;
}

function deliveryCard({ srcImage, title, status, time, classSecondary }: deliveryCardProps) {
  const statusClassName = status === 'Cancelled' ? styles.cancelled : '';
  return (
    <li className={`${styles.deliveryCard} ${classSecondary || ''}`}>
      <img className={styles.img} src={srcImage} alt={title} loading="lazy"></img>
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p className={`${styles.status} ${statusClassName}`}>{status}</p>
      </div>
      <span className={styles.time}>{time}</span>
    </li>
  );
}

export default deliveryCard;
