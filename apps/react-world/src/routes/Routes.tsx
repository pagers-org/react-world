import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';
import { RegisterPage } from '../pages/register';
import { ArticlePage } from '../pages/article';
import { EditorPage } from '../pages/editor';
import { SettingsPage } from '../pages/settings';

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
  {
    path: '/editor/:articleSlug?', // 새 아티클 작성 | 아티클 수정
    element: <EditorPage />,
  },
  {
    path: '/article/:slug',
    element: <ArticlePage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
