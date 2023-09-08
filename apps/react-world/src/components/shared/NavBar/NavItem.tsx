import React from 'react';
import styled from '@emotion/styled';

interface NavItemProps {
  href: string;
  isActive?: boolean;
  title: string;
}

export const NavItem: React.FC<NavItemProps> = ({ href, isActive, title }) => (
  <li className="nav-item">
    <NavLink className={`nav-link ${isActive ? 'active' : ''}`} href={href}>
      {title}
    </NavLink>
  </li>
);

const NavLink = styled.a`
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
