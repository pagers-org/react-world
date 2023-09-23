import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from '@components/shared/Layout/Layout';
import { HomePage } from '@pages/home';
import { LoginPage } from '@pages/login';
import { RegisterPage } from '@pages/register';
import { ProfilePage } from '@pages/profile';
import { ArticlePage } from '@pages/article';
import { EditorPage } from '@pages/editor';
import { SettingsPage } from '@pages/settings';
import { Global } from '@emotion/react';
import globalStyles from '@styles/globalStyles';

export const AppRoutes = () => {
  return (
    <Layout>
      <Global styles={globalStyles} />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/editor/:articleSlug?" element={<EditorPage />} />
          <Route path="/article/:articleSlug" element={<ArticlePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </Layout>
  );
};
