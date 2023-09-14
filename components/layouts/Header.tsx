'use client';
import { header, logo } from '@/styles/layout.css';
import Link from 'next/link';
import React from 'react';

import dynamic from 'next/dynamic';

const NavBar = dynamic(() => import('@/components/layouts/NavBar'), { ssr: false });

const Header = () => {
  return (
    <header className={header}>
      <Link href="/" className={logo}>
        conduit
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
