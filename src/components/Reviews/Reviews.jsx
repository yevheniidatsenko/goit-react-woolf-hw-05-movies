import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { format } from 'date-fns';
import { getMoviesReviews } from '../API/MoviesAPI';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        Loading.dots({ svgSize: '250px' });
        setError(null);

        const data = await getMoviesReviews(movId);

        if (data.data.results.length === 0) {
          Notify.info('Sorry, no reviews');
          return;
        }

        setReviews(data.data.results);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        Loading.remove();
      }
    };

    getReviews();
  }, [movId]);

  return (
    <div>
      {error && <h2>error: {error}</h2>}
      <ul className={styles.List}>
        {reviews.map(({ author, content, created_at }) => (
          <li className={styles.Item} key={author}>
            <div className={styles.Wrapper}>
              <p className={styles.Author}>{author}</p>
              <p>{format(new Date(created_at), 'dd MMMM yyyy HH:mm')}</p>
            </div>
            <p className={styles.Text}>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
