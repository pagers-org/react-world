import { clsx } from 'lib/utils';

export const NavBar = () => {
  const pathname = '/';

  const menu = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Sign in',
      path: '/login',
    },
    {
      title: 'Sign up',
      path: '/register',
    },
  ];

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          conduit
        </a>

        <ul className="nav navbar-nav pull-xs-right">
          {menu.map((item) => (
            <li className="nav-item" key={item.title}>
              <a
                className={clsx('nav-link', { active: item.path === pathname, [`${pathname}`]: true })}
                href={item.path}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
