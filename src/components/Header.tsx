'use client';

import { ROUTE } from '@/constants/route';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import * as styles from './Header.css';

const LINKS = [
  { name: 'Home', href: ROUTE.HOME },
  { name: 'Sign in', href: ROUTE.SIGNIN },
  { name: 'Sign up', href: ROUTE.SIGNUP },
];

export default function Header() {
  const router = usePathname();

  return (
    <header className={styles.wrapper}>
      <Link href={ROUTE.HOME}>
        <h1 className={styles.title}>Real World Blog</h1>
      </Link>
      <nav>
        <ul className={styles.nav}>
          {LINKS.map((link) => (
            <Link key={link.name} href={link.href}>
              <li
                className={
                  router === link.href ? styles.selectedNav : styles.navItem
                }
              >
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
