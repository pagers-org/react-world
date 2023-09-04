import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
