import { A, useNavigate } from '@solidjs/router';
import { children, type Component, For, type JSX } from 'solid-js';
import {
  HeaderContainer,
  HeaderMenu,
  HeaderMenuLink,
  HeaderMenuList,
  HeaderNavbar,
} from '@/layouts/header/header.css';
import { access } from '@/utils';

type HeaderMenuTypes = {
  path: string;
  title: string;
};

export type HeaderProps = {
  menus?: HeaderMenuTypes[] | JSX.Element;
};

export const Header: Component<HeaderProps> = (props) => {
  const navigate = useNavigate();

  const handleClick = (path: string) => (event: MouseEvent) => {
    event.preventDefault();
    navigate(path);
  };

  const c = children(() =>
    props.menus instanceof HTMLElement
      ? props.menus
      : access(() => (
          <ul class={HeaderMenuList}>
            <For each={(props.menus || []) as HeaderMenuTypes[]}>
              {(menu) => (
                <li class={HeaderMenu}>
                  <A
                    class={HeaderMenuLink}
                    activeClass="active"
                    href={menu.path}
                    onClick={handleClick(menu.path)}
                  >
                    {menu.title}
                  </A>
                </li>
              )}
            </For>
          </ul>
        )),
  );
  return (
    <nav class={HeaderNavbar}>
      <div class={HeaderContainer}>
        <a class="navbar-brand" href="/">
          Pagers
        </a>
        {c()}
      </div>
    </nav>
  );
};
