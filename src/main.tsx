import '../public/styles/main.css';
import '../public/styles/ionicons.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';

import ErrorPage from './pages/ErrorPage';
import Article from './pages/Article';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ROUTES } from './routes';

const DefaultLayout = () => (
  <>
    <Navbar />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: ROUTES.ROOT,
        element: <App />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.ARTICLE,
        element: <Article />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.REGISTER,
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
