'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { cn } from '@/utils/style';

import { NavbarStyle } from './style';

const Navbar = () => {
  const pathname = usePathname();
  const [userName, setUserName] = useState('');

  const NOT_LOGIN_PATH = [
    { href: '/', title: 'Home' },
    { href: '/login', title: 'Sign in' },
    { href: '/signUp', title: 'Sign Up' },
  ];

  const LOGIN_PATH = [
    { href: '/', title: 'Home' },
    {
      href: '/editor',
      title: (
        <div>
          <img src="" alt="" />
          New Article
        </div>
      ),
    },
    { href: '/settings', title: 'settings' },
    {
      href: `/@${userName}`,
      title: userName,
    },
  ];

  useEffect(() => {
    setUserName(JSON.parse(window.localStorage.getItem('user'))?.username);
  }, []);
  return (
    <nav className="navbar navbar-light">
      <div className="container flex !justify-between">
        <Link className="navbar-brand" href="/">
          Moseung
        </Link>
        <ul className="flex gap-2">
          {(userName ? LOGIN_PATH : NOT_LOGIN_PATH).map((path, index) => (
            <Link
              key={index}
              className={cn(
                NavbarStyle({ isCurrentPath: pathname === path.href }),
              )}
              href={path.href}
            >
              {path.title}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
