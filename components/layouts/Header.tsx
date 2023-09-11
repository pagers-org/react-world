import { header, logo } from '@/styles/layout.css';
import Link from 'next/link';
import React from 'react';
import NavBar from './NavBar';

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
