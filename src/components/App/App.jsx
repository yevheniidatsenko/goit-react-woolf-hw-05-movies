import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import styles from './App.module.css';

const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../Pages/MoviesPage/MoviesPage'));
const MoviesPageDetails = lazy(() =>
  import('../Pages/MoviesPageDetails/MoviesPageDetails')
);
const PageNotFound = lazy(() => import('../Pages/PageNotFound/PageNotFound'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const App = () => {
  return (
    <div className={styles.ContainerApp}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/movies"
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <MoviesPage />
              </Suspense>
            }
          />
          <Route
            path="/movies/:movId"
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <MoviesPageDetails />
              </Suspense>
            }
          >
            <Route
              path="/movies/:movId/cast"
              element={
                <Suspense fallback={<h1>loading...</h1>}>
                  <Cast />
                </Suspense>
              }
            />
            <Route
              path="/movies/:movId/reviews"
              element={
                <Suspense fallback={<h1>loading...</h1>}>
                  <Reviews />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
