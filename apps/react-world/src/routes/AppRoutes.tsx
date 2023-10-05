import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { Layout } from '@/components/shared/Layout/Layout';
import { Navbar } from '@/components/shared/NavBar/NavBar';
import { HomePage } from '@/pages/home';
import { LoginPage } from '@/pages/login';
import { RegisterPage } from '@/pages/register';
import { ProfilePage } from '@/pages/profile';
import { ArticlePage } from '@/pages/article';
import { EditorPage } from '@/pages/editor';
import { SettingsPage } from '@/pages/settings';
import { Global } from '@emotion/react';
import globalStyles from '@/styles/globalStyles';
import type { NavItemType } from '@/app-types/NavItemModel';
import { NAV_ITEMS } from '@/app-types/NavItemModel';

export const AppRoutes = () => {
  return (
    <Layout>
      <Global styles={globalStyles} />
      <Router>
        <NavBarWithLocation />
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

// Path 변경에 따른 NavBar 상태 변경을 처리하기 위한 처리
const NavBarWithLocation = () => {
  const location = useLocation();

  const { name: selectedNavItem } = NAV_ITEMS.find(
    navItem => location.pathname === navItem.path,
  ) || { name: 'home' };
  return <Navbar selectedNavItem={selectedNavItem} />;
};
