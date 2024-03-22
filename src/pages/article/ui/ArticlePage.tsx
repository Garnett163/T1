import DivPage from '@shared/ui/div-page/DivPage';
import Header from '@widgets/header/ui/Header';
import ArticleContent from '@widgets/article-content/ui/ArticleContent';
import ArticleCommentsList from '@widgets/article-comments-list/ui/ArticleCommentsList';
import Footer from '@widgets/footer/ui/Footer';

function ArticlePage() {
  return (
    <DivPage>
      <Header />
      <main>
        <ArticleContent />
        <ArticleCommentsList />
      </main>
      <Footer />
    </DivPage>
  );
}

export default ArticlePage;
