import 'swiper/css';
import 'swiper/css/pagination';
import styles from './FeedBack.module.css';
import './Swiper.css';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { ICommentCard } from '@entities/commentCard/model/types';
import CommentCard from '@entities/commentCard/ui/CommentCard';
import ErrorApi from '@shared/ui/errorApi/ErrorApi';
import Preloader from '@shared/ui/preloader/Preloader';
import { useGetCommentsQuery } from '../api/widgetFeedBackApi';
import { START_INDEX, END_INDEX_COMMENTS } from '@shared/constants';

function FeedBack() {
  const { data: commentsData, isError, isLoading } = useGetCommentsQuery();
  const [comments, setComments] = useState<ICommentCard[]>([]);

  useEffect(() => {
    if (commentsData) {
      const sliceSixComments = commentsData.comments.slice(START_INDEX, END_INDEX_COMMENTS);
      setComments(sliceSixComments);
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
              {comments.map((comment: ICommentCard) => (
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
