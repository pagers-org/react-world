'use client';
import { EditIcon, SettingIcon, SmileIcon } from '@/composables/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as styles from '@/styles/layout.css';

const LoginNav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div>
        <Link
          href="/"
          className={pathname === '/' ? `${styles.navItem} ${styles.activate}` : `${styles.navItem} ${styles.disabled}`}
        >
          Home
        </Link>
      </div>
      <div>
        <EditIcon />
        <Link
          href="/editor"
          className={
            pathname === '/editor' ? `${styles.navItem} ${styles.activate}` : `${styles.navItem} ${styles.disabled}`
          }
        >
          New Article
        </Link>
      </div>
      <div>
        <SettingIcon />
        <Link
          href="/settings"
          className={
            pathname === '/settings' ? `${styles.navItem} ${styles.activate}` : `${styles.navItem} ${styles.disabled}`
          }
        >
          Settings
        </Link>
      </div>
      <div>
        <SmileIcon />
        <Link
          href="/:username"
          className={pathname === '/' ? `${styles.navItem} ${styles.activate}` : `${styles.navItem} ${styles.disabled}`}
        >
          {}
        </Link>
      </div>
    </nav>
  );
};

export default LoginNav;
