import DivPage from '@shared/ui/div-page/DivPage';
import Header from '@widgets/header/ui/Header';
import Footer from '@widgets/footer/ui/Footer';
import Articles from '@widgets/articles/ui/Articles';

function BlogPage() {
  return (
    <DivPage>
      <Header />
      <main>
        <Articles />
      </main>
      <Footer />
    </DivPage>
  );
}

export default BlogPage;
