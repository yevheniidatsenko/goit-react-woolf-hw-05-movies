import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './Layout.module.css';

const Loader = () => <div>Loading...</div>;

const Layout = () => {
  return (
    <div>
      <Header />
      <div className={styles.Wrapper}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
