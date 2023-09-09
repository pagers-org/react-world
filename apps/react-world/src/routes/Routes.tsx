import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../components/shared/layout/Layout';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';
import { RegisterPage } from '../pages/register';
import { ProfilePage } from '../pages/profile';
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
    path: '/profile/:username',
    element: <ProfilePage />,
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
  return (
    <Layout>
      <RouterProvider router={router} />;
    </Layout>
  );
};
