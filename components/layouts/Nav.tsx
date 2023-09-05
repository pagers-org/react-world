'use client';
import Link from 'next/link';
import * as styles from '@/styles/layout.css';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {nav?.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={
            pathname === item.href ? `${styles.navItem} ${styles.activate}` : `${styles.navItem} ${styles.disabled}`
          }
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
