import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { checkImg } from '../Utils/checkImg';
import styles from './MoviesDetails.module.css';

const MoviesDetails = ({ details }) => {
  useEffect(() => {
    const rootBg = document.querySelector('body');
    if (rootBg) {
      rootBg.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${details.backdrop_path})`;
      rootBg.style.backgroundSize = 'cover';
      rootBg.style.backgroundRepeat = 'no-repeat';
      rootBg.style.backgroundAttachment = 'fixed';
    }
  }, [details.backdrop_path]);

  return (
    <div>
      <div className={styles.Details}>
        <img
          src={checkImg(details.poster_path)}
          alt={details.title || details.original_name}
          width={'400px'}
          height={'600px'}
        />
        <div>
          <h1 className={styles.DetailsTitle}>
            {details.title || details.original_name}
          </h1>
          <div className={styles.DetailsInfo}>
            Overview:{' '}
            <span className={styles.DetailsInfoBord}>{details.overview}</span>
          </div>
          <div className={styles.DetailsInfo}>
            User score:{' '}
            <span className={styles.DetailsInfoBord}>
              {Math.round(details.vote_average * 10)}%
            </span>
          </div>
          <div className={styles.DetailsInfo}>
            Genres:{' '}
            <ul className={styles.DetailsInfoBord}>
              {details.genres &&
                details.genres.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.AdditionalWrapper}>
        <h2 className={styles.AdditionalTitle}>Additional information</h2>
        <ul className={styles.AdditionalList}>
          <li>
            <NavLink className={styles.AdditionalLink} to={'cast'}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.AdditionalLink} to={'reviews'}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MoviesDetails;
