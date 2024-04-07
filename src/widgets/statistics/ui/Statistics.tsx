import styles from './Statistics.module.css';
import React from 'react';
function Statistics() {
  return (
    <section className={styles.statistics}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.number}>10K+</p>
          <p className={styles.description}>Satisfied Costumers</p>
          <p className={styles.description}>All Great Over The World</p>
        </li>
        <div className={styles.borderRight}></div>
        <li className={styles.item}>
          <p className={styles.number}>4M</p>
          <p className={styles.description}>Healthy Dishes Sold</p>
          <p className={styles.description}>Including Milk Shakes Smooth</p>
        </li>
        <div className={styles.borderRight}></div>
        <li className={styles.item}>
          <p className={styles.number}>99.99%</p>
          <p className={styles.description}>Reliable Customer Support</p>
          <p className={styles.description}>We Provide Great Experiences</p>
        </li>
      </ul>
    </section>
  );
}

export default Statistics;
