import styles from './HomePage.module.css';
import Header from '@widgets/header/ui/Header';
import Promo from '@widgets/promo/ui/Promo';
import Statistics from '@widgets/statistics/ui/Statistics';
import QualityPromo from '@widgets/qualityPromo/ui/QualityPromo';
import TopFood from '@widgets/topFood/ui/TopFood';
import Dashboard from '@widgets/dashboard/ui/Dashboard';
import FeedBack from '@widgets/feedBack/ui/FeedBack';
import Faq from '@widgets/faq/ui/Faq';

function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Promo />
        <Statistics />
        <QualityPromo />
        <TopFood />
        <Dashboard />
        <FeedBack />
        <Faq />
      </main>
    </div>
  );
}

export default HomePage;
