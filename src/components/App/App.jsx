import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import styles from './App.module.css';

const HomePage = lazy(() => import('../../Pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../Pages/MoviesPage/MoviesPage'));
const MoviesPageDetails = lazy(() =>
  import('../../Pages/MoviesPageDetails/MoviesPageDetails')
);
const PageNotFound = lazy(() =>
  import('../../Pages/PageNotFound/PageNotFound')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const App = () => {
  return (
    <div className={styles.ContainerApp}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movId" element={<MoviesPageDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
