import styles from './ArticleContent.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IArticle } from '@entities/articleCard/model/types';
import ArticleUser from '@entities/articleUser/ui/ArticleUser';
import ratingIcon from '@shared/assets/svg/ratingIcon.svg';
import Preloader from '@shared/ui/preloader/Preloader';
import ErrorApi from '@shared/ui/errorApi/ErrorApi';
import { useGetArticleByIdQuery } from '../api/widgetArticleContentApi';

interface IArticleContentProps {
  id: string | undefined;
}

function ArticleContent({ id }: IArticleContentProps) {
  const { data: articleData, isError, isLoading } = useGetArticleByIdQuery({ articleId: id });
  const [article, setArticle] = useState<IArticle | null>(null);

  useEffect(() => {
    if (articleData) {
      setArticle(articleData);
    } else if (isError) {
      console.log('Произошла ошибка при загрузке данных');
    }
  }, [articleData, isError]);

  return (
    <section className={styles.articleContent}>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={styles.containerSection}>
          <h2 className={styles.title}>{article?.title}</h2>
          <div className={styles.containerAuthorInfo}>
            <ArticleUser userId={article?.userId} />
            <div className={styles.containerRatingAndHash}>
              <div className={styles.containerRating}>
                <p className={styles.ratingNumber}>{article?.reactions}</p>
                <img src={ratingIcon} alt="Star rating" />
              </div>
              <div className={styles.containerHashTags}>
                {article?.tags.map((hashTag: string, index: number) => (
                  <span className={styles.hashTags} key={index}>
                    #{hashTag}
                    {index !== article?.tags.length - 1 && ','}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <ErrorApi errorApi={isError} textErrorApi="An error occurred while loading data" />
          <p className={styles.authorText}>{article?.body}</p>
          <Link to="/blog" className={styles.redirectOnBlog} aria-label="Go to blog page">
            All Articles
          </Link>
        </div>
      )}
    </section>
  );
}

export default ArticleContent;
