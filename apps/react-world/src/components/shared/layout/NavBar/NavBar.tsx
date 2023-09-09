import styled from '@emotion/styled';
import { Container } from '../../Container';
import { NavItem } from './NavItem';
import { NavbarBrand } from './NavBarBrand';
import { NavList } from './NavList';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Container>
        <NavbarBrand />
        <NavList>
          <NavItem href="/" isActive title="Home" />
          <NavItem href="/login" title="Sign in" />
          <NavItem href="/register" title="Sign up" />
        </NavList>
      </Container>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: block;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;

  @media (min-width: 544px) {
    border-radius: 0.25rem;
  }

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  & {
    .navbar-brand {
      color: rgba(0, 0, 0, 0.8);
      &:focus,
      &:hover {
        color: rgba(0, 0, 0, 0.8);
      }
    }

    .navbar-nav {
      .nav-link {
        color: rgba(0, 0, 0, 0.3);
        &:focus,
        &:hover {
          color: rgba(0, 0, 0, 0.6);
        }

        &.open,
        &.active,
        &.open:focus,
        &.active:focus,
        &.open:hover,
        &.active:hover {
          color: rgba(0, 0, 0, 0.8);
        }
      }

      .navbar-divider {
        background-color: rgba(0, 0, 0, 0.075);
      }
    }
  }
`;
