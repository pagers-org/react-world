import Link from 'next/link';
import React from 'react';

const nav = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/editor',
    name: 'New Article',
  },
  {
    href: '/settings',
    name: 'Settings',
  },
];

const Nav = () => {
  return (
    <nav>
      {nav.map((item, index) => (
        <Link key={index} href={item.href}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
