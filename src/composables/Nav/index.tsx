'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Sign in',
    link: '/login',
  },
  {
    name: 'Sign up',
    link: '/register',
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          {navLinks.map(({ name, link }) => (
            <li className="nav-item" key={name}>
              <Link
                className={`nav-link ${classNames({
                  active: pathname === link,
                })}`}
                href={link}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
