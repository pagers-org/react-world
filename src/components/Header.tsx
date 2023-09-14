'use client';

import Link from 'next/link';
import * as styles from './Header.css';
import { useState } from 'react';
import { ROUTES } from '../constants/routes';

export default function Header() {
  const [selected, setSelected] = useState('Home');
  const nav = Object.values(ROUTES).filter((route) => route.nav);
  return (
    <header className={styles.wrapper}>
      <Link href={ROUTES.HOME.href}>
        <h1 className={styles.title} onClick={() => setSelected('Home')}>
          Real World Blog
        </h1>
      </Link>
      <nav>
        <ul className={styles.nav}>
          {nav.map((link) => (
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
