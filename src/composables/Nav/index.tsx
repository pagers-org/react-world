'use client';

import { useUserStore } from '@/stores/users';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

const isNotLoginNavLinks = [
  {
    link: '/',
    name: 'Home',
  },
  {
    link: '/login',
    name: 'Sign in',
  },
  {
    link: '/register',
    name: 'Sign up',
  },
];

const isLoginNavLinks = [
  {
    link: '/',
    name: 'Home',
  },
  {
    link: '/editor',
    name: 'New Article ',
    iconImage: <i className="ion-compose"></i>,
  },
  {
    link: '/settings',
    name: 'Settings ',
    iconImage: <i className="ion-gear-a"></i>,
  },
  {
    link: '/profile',
    name: 'profile',
  },
];

interface NavLinkProps {
  link: string;
  name: string;
  iconImage?: ReactNode;
}

const NavLink = ({ link, name, iconImage }: NavLinkProps) => {
  const user = useUserStore((state) => state.user);
  const pathname = usePathname();

  return (
    <li className="nav-item">
      <Link
        className={`nav-link ${classNames({
          active: pathname === link,
        })}`}
        href={link === '/profile' ? `/profile/${user.username}` : link}
      >
        {link === '/profile' ? (
          <>
            <Image
              className="user-pic"
              src={user.image}
              alt={user.username}
              width={26}
              height={26}
            />{' '}
            {user.username}
          </>
        ) : (
          <>
            {iconImage} {name}
          </>
        )}
      </Link>
    </li>
  );
};

const Nav = () => {
  const user = useUserStore((state) => state.user);

  const [currentNavLinks, setCurrentNavLinks] = useState<NavLinkProps[]>([]);

  useEffect(() => {
    setCurrentNavLinks(user.email ? isLoginNavLinks : isNotLoginNavLinks);
  }, [user]);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          {currentNavLinks.map((currentNavLink) => (
            <NavLink key={currentNavLink.link} {...currentNavLink} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
