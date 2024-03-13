import styles from './HomePage.module.css';
import Header from '../../../widgets/header/ui/Header';
import Promo from '../../../widgets/promo/ui/Promo';

function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Promo />
      </main>
    </div>
  );
}

export default HomePage;
