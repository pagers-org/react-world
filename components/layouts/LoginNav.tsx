'use client';
import { EditIcon, SettingIcon, SmileIcon } from '@/composables/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as styles from '@/styles/layout.css';
import useUserStore from '@/stores/useUserStore';
import Image from 'next/image';
import { userImageSm } from '@/styles/profile.css';

const LoginNav = () => {
  const pathname = usePathname();
  const { username, image } = useUserStore();
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
        <Link
          href="/editor"
          className={
            pathname === '/editor' ? `${styles.navItem} ${styles.activate}` : `${styles.navItem} ${styles.disabled}`
          }
        >
          <EditIcon />
          &nbsp; New Article
        </Link>
      </div>
      <div>
        <Link
          href="/settings"
          className={
            pathname === '/settings' ? `${styles.navItem} ${styles.activate}` : `${styles.navItem} ${styles.disabled}`
          }
        >
          <SettingIcon />
          &nbsp; Settings
        </Link>
      </div>
      <div>
        <Link
          href={`/@${username}`}
          className={
            pathname === `/@${username}`
              ? `${styles.navItem} ${styles.activate}`
              : `${styles.navItem} ${styles.disabled}`
          }
        >
          <Image src={image} alt="Profile" width={26} height={26} className={userImageSm} />
          &nbsp; {username}
        </Link>
      </div>
    </nav>
  );
};

export default LoginNav;
