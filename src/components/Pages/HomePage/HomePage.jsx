import { useEffect, useState } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { getTrendingDay } from '../../API/MoviesAPI';
import MoviesList from '../../MoviesList/MoviesList';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    Loading.dots({ svgSize: '250px' });
    setError(null);
    const trendingMovies = async () => {
      try {
        const data = await getTrendingDay();
        setMoviesTrending(data.data.results);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        Loading.remove();
      }
    };

    trendingMovies();
  }, []);

  const rootBg = document.querySelector('body');
  rootBg.style.backgroundImage = 'none';

  return (
    <div>
      <h1 className={styles.Title}>Trenting today</h1>
      {error && <h2>error: {error}</h2>}
      {moviesTrending && <MoviesList collection={moviesTrending} />}
    </div>
  );
};

export default HomePage;
