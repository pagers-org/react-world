'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as styles from '@/styles/layout.css';

const NonLoginNav = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        className={pathname === '/' ? `${styles.navItem} ${styles.activate}` : `${styles.navItem} ${styles.disabled}`}
      >
        Home
      </Link>
      <Link
        href="/login"
        className={
          pathname === 'login' ? `${styles.navItem} ${styles.activate}` : `${styles.navItem} ${styles.disabled}`
        }
      >
        Sign in
      </Link>
      <Link
        href="/register"
        className={
          pathname === '/register' ? `${styles.navItem} ${styles.activate}` : `${styles.navItem} ${styles.disabled}`
        }
      >
        Sign up
      </Link>
    </nav>
  );
};

export default NonLoginNav;
