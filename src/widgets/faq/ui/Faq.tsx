import styles from './Faq.module.css';

function Faq() {
  return (
    <section className={styles.faq}>
      <div className={styles.containerSection}>
        <h2 className={styles.title}>
          Frequently Asked <span className={styles.titleSpan}>Questions</span>
        </h2>
      </div>
    </section>
  );
}

export default Faq;
