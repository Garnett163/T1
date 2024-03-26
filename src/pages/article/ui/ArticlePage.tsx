import styles from './ArticlePage.module.css';
import { useParams } from 'react-router-dom';
import DivPage from '@shared/ui/div-page/DivPage';
import Header from '@widgets/header/ui/Header';
import ArticleContent from '@widgets/article-content/ui/ArticleContent';
import ArticleCommentsList from '@widgets/article-comments-list/ui/ArticleCommentsList';

import Footer from '@widgets/footer/ui/Footer';

function ArticlePage() {
  const { id } = useParams();
  return (
    <DivPage>
      <Header />
      <main className={styles.main}>
        <ArticleContent id={id} />
        <ArticleCommentsList id={id} />
      </main>
      <Footer />
    </DivPage>
  );
}

export default ArticlePage;
