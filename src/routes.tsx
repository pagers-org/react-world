import { createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Article from './pages/Article';
import Login from './pages/Login';
import Register from './pages/Register';

const ROUTES = {
  ROOT: '/',
  ARTICLE: '/article/:id',
  LOGIN: '/login',
  REGISTER: '/register',
};

export const router = createBrowserRouter([
  {
    element: (
      <>
        <Navbar />
        <Footer />
      </>
    ),
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
