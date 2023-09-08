'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link
              className={`nav-link ${classNames({
                active: pathname === '/',
              })}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${classNames({
                active: pathname === '/login',
              })}`}
              href="/login"
            >
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${classNames({
                active: pathname === '/register',
              })}`}
              href="/register"
            >
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
