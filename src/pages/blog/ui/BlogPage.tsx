import DivPage from '@shared/ui/div-page/DivPage';
import Header from '@widgets/header/ui/Header';
import Footer from '@widgets/footer/ui/Footer';
import ArticlesBlog from '@widgets/articles-blog/ui/ArticlesBlog';

function BlogPage() {
  return (
    <DivPage>
      <Header />
      <main>
        <ArticlesBlog />
      </main>
      <Footer />
    </DivPage>
  );
}

export default BlogPage;
