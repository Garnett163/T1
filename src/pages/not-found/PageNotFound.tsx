import styles from './PageNotFound.module.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className={styles.pageNotFound}>
      <h2 className={styles.note}>К сожалению, страница не найдена =(</h2>
      <span className={styles.number}>404</span>
      <Link className={styles.link} to="/">
        Вернуться на главную
      </Link>
    </div>
  );
}

export default PageNotFound;
