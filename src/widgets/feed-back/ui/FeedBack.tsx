import 'swiper/css';
import 'swiper/css/pagination';
import styles from './FeedBack.module.css';
import './Swiper.css';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { IComment } from '@entities/commentCard/model/types';
import CommentCard from '@entities/commentCard/ui/CommentCard';
import ErrorApi from '@shared/ui/errorApi/ErrorApi';
import Preloader from '@shared/ui/preloader/Preloader';
import { LIMIT_COMMENTS, INITIAL_SKIP } from '@shared/constants';
import { useGetCommentsQuery } from '../api/widgetFeedBackApi';

function FeedBack() {
  const {
    data: commentsData,
    isError,
    isLoading,
  } = useGetCommentsQuery({ limit: LIMIT_COMMENTS, skip: INITIAL_SKIP.toString() });
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    if (commentsData) {
      setComments(commentsData.comments);
    } else if (isError) {
      console.log('Произошла ошибка при загрузке данных');
    }
  }, [commentsData, isError]);

  return (
    <section className={styles.feedBack}>
      <div className={styles.containerSection}>
        <h2 className={styles.title}>
          <span className={styles.titleSpan}>Customer</span> Say
        </h2>
        {isLoading ? (
          <Preloader />
        ) : (
          <ul className={styles.commentsList}>
            <Swiper
              spaceBetween={46}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              breakpoints={{
                1440: {
                  slidesPerView: 2,
                },
                800: {
                  slidesPerView: 2,
                },
              }}
              className={styles.swiper}
            >
              {comments.map((comment: IComment) => (
                <SwiperSlide key={comment.id} className={styles.swiperSlide}>
                  <CommentCard key={comment.id} commentCard={comment} />
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        )}

        <ErrorApi errorApi={isError} />
      </div>
    </section>
  );
}

export default FeedBack;
