'use client';

import Link from 'next/link';
import * as styles from './Header.css';
import { useState } from 'react';
import { ROUTES } from '../app/constants/routes';

const NAV_LIST = [
  { name: 'Home', href: '/' },
  { name: 'Sign in', href: '/login' },
  { name: 'Sign up', href: '/register' },
];

export default function Header() {
  const [selected, setSelected] = useState('Home');
  return (
    <header className={styles.wrapper}>
      <Link href={ROUTES.home}>
        <h1 className={styles.title} onClick={() => setSelected('Home')}>
          Real World Blog
        </h1>
      </Link>
      <nav>
        <ul className={styles.nav}>
          {NAV_LIST.map((link) => (
            <Link key={link.name} href={link.href}>
              <li
                className={
                  selected === link.name ? styles.selectedNav : styles.navItem
                }
                onClick={() => setSelected(link.name)}
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
