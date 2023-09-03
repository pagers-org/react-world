import Link from 'next/link';
import * as styles from '@/styles/layout.css';

const nonLoginNav = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/login',
    name: 'Sign in',
  },
  {
    href: '/register',
    name: 'Sign up',
  },
];

const loginNav = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/editor',
    name: 'New Article',
  },
  {
    href: '/settings',
    name: 'Settings',
  },
];

const Nav = () => {
  const isLogin = false;
  const nav = isLogin ? loginNav : nonLoginNav;
  return (
    <nav className={styles.nav}>
      {nav?.map((item, index) => (
        <Link key={index} href={item.href}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
