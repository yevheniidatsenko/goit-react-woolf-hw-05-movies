import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className={styles.Wrapper}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
