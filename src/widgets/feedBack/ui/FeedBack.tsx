import styles from './FeedBack.module.css';
import commentQuote from '@shared/assets/svg/commentCardQuotes.svg';

function FeedBack() {
  return (
    <section className={styles.feedBack}>
      <div className={styles.containerSection}>
        <h2 className={styles.title}>
          <span className={styles.titleSpan}>Customer</span> Say
        </h2>
        <ul className={styles.commentsList}>
          <li className={styles.commentWithQuote}>
            <div className={styles.containerComment}>
              <h4 className={styles.nickName}>@omottley2h</h4>
              <img src={commentQuote} alt="Декоративные кавычки"></img>
            </div>
            <p className={styles.commentText}>I cannot believe how I found you, this is so pretty.</p>
          </li>

          <div className={styles.containerColumn}>
            <div className={styles.containerFlex}>
              <li className={styles.comment}>I cannot believe how I found you, this is so pretty</li>
              <li className={`${styles.comment} ${styles.partiallyHidden}`}>
                I cannot believe how I found you, this is so pretty
              </li>
            </div>
            <div className={styles.scroll}></div>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default FeedBack;
