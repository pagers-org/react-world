import Link from 'next/link';
import React from 'react';

import {
  navBar,
  controlButton,
  headControllers,
  titleBanner,
} from './NavBar.css';

export function NavBar() {
  return (
    <nav className={navBar}>
      <h1 className={titleBanner}>
        <Link href="/">Conduit</Link>
      </h1>
      <ul className={headControllers}>
        <li className={controlButton}>Home</li>
        <li className={controlButton}>New Article</li>
        <li className={controlButton}>Setting</li>
        <li className={controlButton}>Profile</li>
      </ul>
    </nav>
  );
}
