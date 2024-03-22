import styles from './ArticlesBlog.module.css';
import { useState, useEffect } from 'react';
import ArticleCard from '@entities/articleCard/ui/ArticleCard';
import { IArticle } from '@entities/articleCard/model/types';
import { useGetArticlesQuery } from '../api/widgetArticlesBlogApi';
import Preloader from '@shared/ui/preloader/Preloader';
import ErrorApi from '@shared/ui/errorApi/ErrorApi';
import { LIMIT_PER_PAGE, INITIAL_SKIP, SKIP_PER_PAGE } from '@shared/constants';

function ArticlesBlog() {
  const [skipPages, setSkipPages] = useState(INITIAL_SKIP);
  const {
    data: articlesData,
    isError,
    isLoading,
  } = useGetArticlesQuery({ limit: LIMIT_PER_PAGE, skip: skipPages.toString() });
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    if (articlesData) {
      setArticles(articlesData.posts);
    } else if (isError) {
      console.log('Произошла ошибка при загрузке данных');
    }
  }, [articlesData, isError]);

  function handlePrevPage() {
    if (skipPages >= +LIMIT_PER_PAGE) {
      setSkipPages(prevSkip => prevSkip - SKIP_PER_PAGE);
    }
  }
  function handleNextPage() {
    setSkipPages(prevSkip => prevSkip + SKIP_PER_PAGE);
  }

  return (
    <section className={styles.articles}>
      <div className={styles.containerSection}>
        <h2 className={styles.title}>
          Latest <span className={styles.titleSpan}>Articles</span>
        </h2>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <ul className={styles.articlesList}>
              {articles.map((article: IArticle) => (
                <ArticleCard
                  id={article.id}
                  key={article.id}
                  title={article.title}
                  hashTags={article.tags}
                  rating={article.reactions}
                  description={article.body}
                />
              ))}
            </ul>
            <div className={styles.containerPagination}>
              <button
                className={`${styles.paginationBtn} ${styles.prevPageBtn}`}
                onClick={handlePrevPage}
                disabled={INITIAL_SKIP === skipPages}
              />
              <button
                className={`${styles.paginationBtn} ${styles.nextPageBtn}`}
                onClick={handleNextPage}
                disabled={articles.length < +LIMIT_PER_PAGE}
              />
            </div>
          </>
        )}
        <ErrorApi errorApi={isError} />
      </div>
    </section>
  );
}

export default ArticlesBlog;
