'use client';
import * as styles from '@/styles/layout.css';
import useUserStore from '@/stores/useUserStore';
import { usePathname } from 'next/navigation';
import { EditIcon, SettingIcon } from '@/composables/icons';
import Link from 'next/link';
import { userImageSm } from '@/styles/profile.css';

const NAVS = [
  {
    href: '/login',
    name: 'Sign in',
    icon: '',
    isLogin: false,
  },
  {
    href: '/register',
    name: 'Sign up',
    icon: '',
    isLogin: false,
  },
  {
    href: '/editor',
    name: 'New Article',
    icon: <EditIcon />,
    isLogin: true,
  },
  {
    href: '/settings',
    name: 'Settings',
    icon: <SettingIcon />,
    isLogin: true,
  },
];

const NavBar = () => {
  const { token, username, image } = useUserStore();
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <Link href="/" className={`${styles.navItem} ${pathname === '/' ? styles.activate : styles.disabled}`}>
          Home
        </Link>
        {NAVS.map(({ href, name, icon, isLogin }, index) =>
          (isLogin && token) || (!isLogin && !token) ? (
            <Link
              key={index}
              href={href}
              className={`${styles.navItem} ${pathname === href ? styles.activate : styles.disabled}`}
            >
              {icon}
              &nbsp; {name}
            </Link>
          ) : null
        )}
        {token && (
          <Link
            href={`/@${username}`}
            className={`${styles.navItem} ${pathname === `/@${username}` ? styles.activate : styles.disabled}`}
          >
            <Image src={image} alt="Profile" width={26} height={26} className={userImageSm} />
            &nbsp; {username}
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
