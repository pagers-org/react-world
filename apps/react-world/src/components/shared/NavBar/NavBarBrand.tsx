import React from 'react';
import styled from '@emotion/styled';

export const NavbarBrand = () => {
  return (
    <a href="/">
      <NavbarBrandContainer>conduit</NavbarBrandContainer>
    </a>
  );
};

const NavbarBrandContainer = styled.div`
  font-family: 'Titillium Web', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 0rem;
  margin-right: 2rem;
  color: #5cb85c;
  float: left;
  :focus,
  :hover {
    text-decoration: none;
  }
`;
