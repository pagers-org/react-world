import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';
import { RegisterPage } from '../pages/register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
