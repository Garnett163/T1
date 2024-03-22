import styles from './ArticlesBlog.module.css';
import { useState, useEffect } from 'react';
import ArticleCard from '@entities/articleCard/ui/ArticleCard';
import { IArticleCard } from '@entities/articleCard/model/types';
import { useGetArticlesQuery } from '../api/widgetArticlesBlogApi';
import Preloader from '@shared/ui/preloader/Preloader';
import ErrorApi from '@shared/ui/errorApi/ErrorApi';

function ArticlesBlog() {
  const { data: articlesData, isError, isLoading } = useGetArticlesQuery({ limit: '12', skip: '0' });
  const [articles, setArticles] = useState<IArticleCard[]>([]);

  useEffect(() => {
    if (articlesData) {
      setArticles(articlesData.posts);
    } else if (isError) {
      console.log('Произошла ошибка при загрузке данных');
    }
  }, [articlesData, isError]);

  console.log(articles);

  return (
    <section className={styles.articles}>
      <div className={styles.containerSection}>
        <h2 className={styles.title}>
          Latest <span className={styles.titleSpan}>Articles</span>
        </h2>
        {isLoading ? (
          <Preloader />
        ) : (
          <ul className={styles.articlesList}>
            {articles.map((article: IArticleCard) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                hashTags={article.tags}
                rating={article.reactions}
                description={article.body}
              />
            ))}
          </ul>
        )}
        <ErrorApi errorApi={isError} />
      </div>
    </section>
  );
}

export default ArticlesBlog;
