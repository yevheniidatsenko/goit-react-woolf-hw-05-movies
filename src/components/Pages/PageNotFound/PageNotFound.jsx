import React from 'react';
import NotFound from '../../Images/error.webp';
import styles from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div className={styles.Container}>
      <img
        src={`${NotFound}`}
        alt="NotFound"
        width={'600px'}
        height={'600px'}
      />
      <div className={styles.Info}>
        <h1>Page Not Found</h1>
        <p>
          We can't seem to find the page you're looking for. Please check the
          URL for any typos.
        </p>
      </div>
      <nav className={styles.Btn}>
        <nav className={styles.Btn} to="/">
          Go to Home
        </nav>
        <nav className={styles.Btn} to="/movies">
          Go to Movies
        </nav>
      </nav>
    </div>
  );
};

export default PageNotFound;
