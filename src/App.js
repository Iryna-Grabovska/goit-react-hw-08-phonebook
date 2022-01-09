import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Routes, Route } from 'react-router-dom';
import { useFetchCurrentUserQuery } from './store/authApi.js';
import { store } from 'store/store';
import { setUser } from './store/userSlice';
// import { NotFounView } from 'views/notFoundView';
import { Loading } from 'components/Loader/Loader.js';
import { AppBar } from 'components/AppBar/AppBar.js';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const LoginPage = lazy(() => import('./views/LoginPage'));
const RegisterPage = lazy(() => import('./views/RegisterPage'));
const ContactsPage = lazy(() => import('views/ContactsPage'));

function App() {
  // const token = useSelector(state => state.token);
  // const { isFetching } = useFetchCurrentUserQuery(null, {
  //   skip: !token,
  // });

  const dispatch = useDispatch();
  const { data, isFetching } = useFetchCurrentUserQuery();
  useEffect(() => {
    // const token = store.getState().user?.token;
    // useFetchCurrentUserQuery();
    // if (!token && !data) return;
    // else dispatch(setUser({ user: data, token }));
  }, [data, dispatch]);
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loading />}>
        {!isFetching ? (
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Routes>
        ) : (
          <Loading />
        )}
      </Suspense>
    </>
    // )
  );
}

export default App;
