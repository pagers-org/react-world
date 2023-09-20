'use client';

import { ROUTE } from '@/constants/route';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import * as styles from './Header.css';

interface Props {
  name: string;
  href: string;
}

const WITHOUT_LOGIN_LINKS = [
  { name: 'Home', href: ROUTE.HOME },
  { name: 'Sign in', href: ROUTE.SIGNIN },
  { name: 'Sign up', href: ROUTE.SIGNUP },
];

const WITH_LOGIN_LINKS = [
  { name: 'Home', href: ROUTE.HOME },
  { name: 'New Article', href: ROUTE.NEW_ARTICLE },
  { name: 'Settings', href: ROUTE.USER_SETTING },
];

export default function Header() {
  const router = usePathname();
  const [cookies] = useCookies(['token']);
  const userToken = cookies.token;
  const [links, setLinks] = useState<Props[]>([]);

  useEffect(() => {
    setLinks(userToken ? WITH_LOGIN_LINKS : WITHOUT_LOGIN_LINKS);
  }, [userToken]);

  return (
    <header className={styles.wrapper}>
      <Link href={ROUTE.HOME}>
        <h1 className={styles.title}>Real World Blog</h1>
      </Link>
      <nav>
        <ul className={styles.nav}>
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
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
