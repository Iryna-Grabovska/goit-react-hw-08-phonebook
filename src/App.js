import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { NotFounView } from 'views/notFoundView';
import { Loading } from 'components/Loader/Loader.js';
// import HomePage from 'views/HomePage';
// import LoginPage from 'views/LoginPage';
// import RegisterPage from 'views/RegisterPage';

// import { ContactsPage } from 'views/ContactsPage';
const HomePage = lazy(() => import('./views/HomePage'));
const LoginPage = lazy(() => import('./views/LoginPage'));
const RegisterPage = lazy(() => import('./views/RegisterPage'));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          {/* <Route path="contacts" element={<ContactsPage />} /> */}

          {/* <Route path="*" element={<NotFounView />} /> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
