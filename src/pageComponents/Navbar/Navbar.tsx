'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/utils/style';

import { NavbarStyle } from './style';

const Navbar = () => {
  const pathname = usePathname();

  const PATH = [
    { href: '/', title: 'Home'},
    { href: '/login', title: 'Sign in'},
    { href: '/signUp', title: 'Sign Up'},
  ];

  return (
    <nav className="navbar navbar-light">
      <div className="container flex !justify-between">
        <Link className="navbar-brand" href="/">
          Moseung
        </Link>
        <ul className="flex gap-2">
          {PATH.map((path) => (
            <Link
              key={path.title}
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
