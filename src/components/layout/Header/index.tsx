import Link from 'next/link';

import { ROUTES } from '@/src/constants/route';

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
        <Link href={ROUTES.HOME}>Home</Link>
        <Link href={ROUTES.LOGIN}>Sign in</Link>
        <Link href={ROUTES.REGISTER}>Sign up</Link>
      </div>
    </header>
  );
}
