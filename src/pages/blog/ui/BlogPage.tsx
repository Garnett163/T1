import styles from './BlogPage.module.css';
import Header from '@widgets/header/ui/Header';
import Footer from '@widgets/footer/ui/Footer';
import Articles from '@widgets/articles/ui/Articles';

function BlogPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Articles />
      </main>
      <Footer />
    </div>
  );
}

export default BlogPage;
