import styles from './Faq.module.css';
import FaqCard from '@entities/faqCard/ui/FaqCard';

function Faq() {
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.containerSection}>
        <h2 className={styles.title}>
          Frequently Asked <span className={styles.titleSpan}>Questions</span>
        </h2>
        <ul className={styles.faqCardsList}>
          <FaqCard
            title="How long does delivery take?"
            answer="You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?"
          />
          <FaqCard
            title="How Does It Work ?"
            answer="You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?"
          />
          <FaqCard
            title="How does your food delivery service work?"
            answer="You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?"
          />
          <FaqCard
            title="What payment options do you accept?"
            answer="You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?"
          />
          <FaqCard
            title="Do you offer discounts or promotions?"
            answer="You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?"
          />
        </ul>
      </div>
    </section>
  );
}

export default Faq;
