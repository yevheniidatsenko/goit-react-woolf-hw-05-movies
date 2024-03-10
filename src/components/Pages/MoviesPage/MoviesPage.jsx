import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import MoviesSearchForm from '../../Form/Form';
import MoviesList from '../../MoviesList/MoviesList';
import { getSearchQuery } from '../../API/MoviesAPI';

const MoviesPage = () => {
  const [searchMowies, setSearchMowies] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery] = useSearchParams();

  const query = searchQuery.get('query');

  useEffect(() => {
    if (query === null) {
      return;
    }
    const searchFilms = async () => {
      try {
        Loading.dots({ svgSize: '250px' });
        setError(null);

        const data = await getSearchQuery(query);
        setSearchMowies(data.data.results);
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

  const rootBg = document.querySelector('body');
  rootBg.style.backgroundImage = 'none';

  return (
    <div>
      <MoviesSearchForm />
      {error && <h2>error: {error}</h2>}
      {searchMowies && <MoviesList collection={searchMowies} />}
    </div>
  );
};

export default MoviesPage;
