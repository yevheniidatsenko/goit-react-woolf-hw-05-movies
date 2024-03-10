import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { checkImg } from '../Utils/checkImg';
import { getMoviesCast } from '../API/MoviesAPI';
import styles from './Cast.module.css';

const Cast = () => {
  const { movId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        Loading.dots({ svgSize: '250px' });
        setError(null);
        const data = await getMoviesCast(movId);

        if (data.data.cast.length === 0) {
          Notify.info('Sorry, no information');
          return;
        }

        setCast(data.data.cast);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        Loading.remove();
      }
    };

    getCast();
  }, [movId]);

  return (
    <div>
      {error && <h2>error: {error}</h2>}
      <ul className={styles.CastList}>
        {cast.map(({ id, profile_path, character, name }) => (
          <li className={styles.CastItem} key={id}>
            <img
              src={`${checkImg(profile_path)}`}
              alt={name}
              width={'120px'}
              height={'170px'}
            />
            <li className={styles.CastDesc}>
              <li className={styles.CastName}>{name}</li>
            </li>
            <ul className={styles.CastDesc}>
              <li className={styles.CastText}>Character name:</li>
              <li className={styles.CastName}>{character}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
