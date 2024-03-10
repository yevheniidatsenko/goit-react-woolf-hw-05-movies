import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { checkImg } from '../Utils/checkImg';
import styles from './MoviesListItem.module.css';

const MoviesListItem = ({ id, title, name, release, poster }) => {
  const location = useLocation();

  return (
    <li className={styles.Item} key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img
          src={`${checkImg(poster)}`}
          alt={title}
          width={'270px'}
          height={'400px'}
        />

        <h2 className={styles.Title}>{title ? title : name}</h2>
        {release && <p>Release: {format(new Date(release), 'dd MMMM yyyy')}</p>}
      </Link>
    </li>
  );
};

export default MoviesListItem;
