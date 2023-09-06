import { navBrand, navContainer, navItem, navLink, navUl, navbar } from './index.css';

export default function Navbar() {
  return (
    <nav className={navbar}>
      <div className={navContainer}>
        <a className={navBrand} href="/">
          conduit
        </a>
        <ul className={navUl}>
          <li className={navItem}>
            <a className={navLink} href="/">
              Home
            </a>
          </li>
          <li className={navItem}>
            <a className={navLink} href="/login">
              Sign in
            </a>
          </li>
          <li className={navItem}>
            <a className={navLink} href="/register">
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
