import DivPage from '@shared/ui/div-page/DivPage';
import Header from '@widgets/header/ui/Header';
import Promo from '@widgets/promo/ui/Promo';
import Statistics from '@widgets/statistics/ui/Statistics';
import QualityPromo from '@widgets/quality-promo/ui/QualityPromo';
import TopFood from '@widgets/top-food/ui/TopFood';
import Dashboard from '@widgets/dashboard/ui/Dashboard';
import FeedBack from '@widgets/feed-back/ui/FeedBack';
import Faq from '@widgets/faq/ui/Faq';
import Footer from '@widgets/footer/ui/Footer';

function HomePage() {
  return (
    <DivPage>
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
      <Footer />
    </DivPage>
  );
}

export default HomePage;
