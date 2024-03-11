import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import MoviesSearchForm from '../../components/Form/Form';
import MoviesList from '../../components/MoviesList/MoviesList';
import { getSearchQuery } from '../../components/API/MoviesAPI';

const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery] = useSearchParams();

  const query = searchQuery.get('query');

  useEffect(() => {
    if (!query) return;

    const searchFilms = async () => {
      try {
        Loading.dots({ svgSize: '250px' });
        setError(null);

        const data = await getSearchQuery(query);
        setSearchMovies(data.data.results);
        Notify.success(`Found ${data.data.results.length} movies`);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        Loading.remove();
      }
    };

    searchFilms();
  }, [query]);

  useEffect(() => {
    const rootBg = document.querySelector('body');
    rootBg.style.backgroundImage = 'none';
  }, []);

  return (
    <div>
      <MoviesSearchForm />
      {error && <h2>Error: {error}</h2>}
      {searchMovies.length > 0 && <MoviesList collection={searchMovies} />}
    </div>
  );
};

export default MoviesPage;
