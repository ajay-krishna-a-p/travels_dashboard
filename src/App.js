/* eslint-disable prettier/prettier */
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CSpinner } from '@coreui/react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './components/Config/Config.js';
import { UserProvider } from './components/UserContext/UserContext.js';
import './scss/style.scss';

import { ToastProvider } from './components/UserContext/Toastcontext.jsx';

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthenticated(!!user);
      setLoading(false); // Set loading to false once authentication state is determined
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >

        <UserProvider>
           <ToastProvider>
          {loading ? ( // Show loading indicator while authentication state is being determined
            <div className="pt-3 text-center">
              <CSpinner color="primary" variant="grow" />
            </div>
          ) : authenticated ? ( // Render routes if authentication state is determined
            <Routes>
              <Route path="*" element={<DefaultLayout />} />
            </Routes>
          ) : (
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/404" element={<Page404 />} />
              <Route exact path="/500" element={<Page500 />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          )}
          </ToastProvider>
        </UserProvider>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
