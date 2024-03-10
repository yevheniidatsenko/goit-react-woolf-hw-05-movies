import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.HeaderWrapper}>
      <ul className={styles.HeaderMenuList}>
        <li className={styles.HeaderMenuItem}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.HeaderMenuItem}>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
