import { Route as BaseRoute, Router as BaseRouter, Routes as BaseRoutes } from '@solidjs/router';
import ArticlePage from '@/pages/article/[slug]';
import EditorPage from '@/pages/editor';
import EditArticlePage from '@/pages/editor/[slug]';
import HomePage from '@/pages/home';
import LoginPage from '@/pages/login';
import ProfilePage from '@/pages/profile/[username]';
import FavoriteProfilePage from '@/pages/profile/[username]/favorites';
import RegisterPage from '@/pages/register';
import SettingPage from '@/pages/settings';

export const Routes = () => (
  <BaseRouter>
    <BaseRoutes>
      <BaseRoute path="/" component={HomePage} />
      <BaseRoute path="/login" component={LoginPage} />
      <BaseRoute path="/register" component={RegisterPage} />
      <BaseRoute path="/settings" component={SettingPage} />
      <BaseRoute path="/profile/:username" component={ProfilePage}>
        <BaseRoute path="/favorite" component={FavoriteProfilePage} />
      </BaseRoute>
      <BaseRoute path="/article/:slug" component={ArticlePage} />
      <BaseRoute path="/editor" component={EditorPage}>
        <BaseRoute path="/:slug" component={EditArticlePage} />
      </BaseRoute>
    </BaseRoutes>
  </BaseRouter>
);
