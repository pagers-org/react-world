import { header, logo } from '@/styles/layout.css';
import Link from 'next/link';
import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <header className={header}>
      <div className={logo}>
        <Link href="/">conduit</Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
