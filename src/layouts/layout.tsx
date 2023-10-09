import { ParentComponent } from 'solid-js';
import { PageTransition, type PageTransitionProps } from '@/components/page-transition';
import { 헤더_라우팅_메뉴 } from '@/constants';
import { Footer } from './footer';
import { Header, type HeaderProps } from './header';

type LayoutProps = {
  headerMenus?: HeaderProps['menus'];
  animate?: PageTransitionProps['type'];
};

export const GlobalLayout: ParentComponent<LayoutProps> = (props) => (
  <PageTransition type={props.animate}>
    <Header menus={props.headerMenus || 헤더_라우팅_메뉴} />
    <main style={{ 'margin-top': '80px', 'padding-bottom': '20px' }}>{props.children}</main>
    <Footer />
  </PageTransition>
);
