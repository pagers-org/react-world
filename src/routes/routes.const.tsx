import type { PageTransitionKey } from '@/components/page-transition';

type RouteTypes = {
  path: string;
  title: string;
  isDisplayMenu?: boolean;
  animate?: PageTransitionKey; // default: fadeIn
};

export const 라우트_리스트: RouteTypes[] = [
  {
    path: '/home',
    title: '홈으로',
    isDisplayMenu: true,
  },
  {
    path: '/login',
    title: '로그인',
    isDisplayMenu: true,
  },
  {
    path: '/register',
    title: '회원가입',
    isDisplayMenu: true,
  },
  {
    path: '/settings',
    title: '설정',
    animate: 'spring',
  },
  {
    path: '/profile',
    title: '프로필',
    animate: 'spring',
  },
  {
    path: '/article/:slug',
    title: '게시글',
    animate: 'book',
  },
  {
    path: '/editor',
    title: '게시글 수정',
    animate: 'book',
  },
];
