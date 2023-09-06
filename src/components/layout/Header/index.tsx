import Link from 'next/link';

import * as styles from '@/src/components/layout/Header/index.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Link className={styles.logo} href="/">
          TECH
        </Link>
      </div>
      <div className={styles.headerRight}>
        <Link href="/">Home</Link>
        <Link href="/login">Sign in</Link>
        <Link href="/register">Sign up</Link>
      </div>
    </header>
  );
}
