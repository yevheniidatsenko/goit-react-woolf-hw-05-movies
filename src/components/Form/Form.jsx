import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Report } from 'notiflix/build/notiflix-report-aio';
import styles from './Form.module.css';

const MoviesSearchForm = () => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const search = searchQuery.get('query');
    search && setQuery(search);
  }, [searchQuery]);

  const onSubmit = e => {
    e.preventDefault();
    if (query.length === 0) {
      Report.failure(
        'Ooops...',
        'Sorry, but I dont know what to search for. <br/><br/> Please enter your query in the search field, and Ill see what I can find.',
        'Okay'
      );
      return;
    }
    setSearchQuery({ query });
  };

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.Wrapper}>
      <form className={styles.SearchForm} onSubmit={onSubmit}>
        <label>
          <input
            className={styles.Input}
            name="Search"
            type="search"
            value={query}
            onChange={handleChange}
            placeholder="Go search films"
          />
        </label>
        <button className={styles.Button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default MoviesSearchForm;
