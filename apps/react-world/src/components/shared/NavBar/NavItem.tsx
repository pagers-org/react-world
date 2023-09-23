import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface NavItemProps {
  to: string;
  isActive?: boolean;
  title: string;
}

export const NavItem = ({ to, isActive, title }: NavItemProps) => (
  <li className="nav-item">
    <NavLink className={`nav-link ${isActive ? 'active' : ''}`} to={to}>
      {title}
    </NavLink>
  </li>
);

const NavLink = styled(Link)`
  display: block;
  padding-top: 0.425rem;
  padding-bottom: 0.425rem;
  color: rgba(0, 0, 0, 0.3);

  :focus,
  :hover {
    color: rgba(0, 0, 0, 0.6);
  }

  &.active {
    color: rgba(0, 0, 0, 0.8);
  }
`;
