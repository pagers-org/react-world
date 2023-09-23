export type NavItemType = 'home' | 'login' | 'register';

type NavItemModel = {
  name: NavItemType;
  path: string;
};

export const NAV_ITEMS: NavItemModel[] = [
  { name: 'home', path: '/' },
  { name: 'login', path: '/login' },
  { name: 'register', path: '/register' },
];
