import MoviesListItem from '../MoviesListItem/MoviesListItem';
import styles from './MoviesList.module.css';

const MoviesList = ({ collection }) => {
  return (
    <ul className={styles.List}>
      {collection.map(
        ({ id, title, original_name, release_date, poster_path }) => (
          <MoviesListItem
            key={id}
            id={id}
            title={title}
            name={original_name}
            release={release_date}
            poster={poster_path}
          />
        )
      )}
    </ul>
  );
};

export default MoviesList;
