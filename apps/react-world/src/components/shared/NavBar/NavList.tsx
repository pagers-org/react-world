import styled from '@emotion/styled';

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  float: right;
  .nav-item + .nav-item {
    margin-left: 1rem;
  }
`;
