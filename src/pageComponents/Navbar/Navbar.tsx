'use client';

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const currentPath = window.location.pathname;
  console.log(currentPath);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Moseung
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/login">
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/signUp">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
