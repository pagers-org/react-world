import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PaginationContainer = styled.ul`
  display: inline-block;
  padding-left: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
`;

export const PageButton = styled.a<{ isActive: boolean }>`
  position: relative;
  float: left;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  color: ${props => (props.isActive ? '#fff' : '#5cb85c')};
  text-decoration: none;
  background-color: ${props => (props.isActive ? '#5cb85c' : '#fff')};
  border: 1px solid #ddd;

  &:first-of-type {
    margin-left: 0;
    border-bottom-left-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }

  &:last-of-type {
    border-bottom-right-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  &:focus,
  &:hover {
    color: #3d8b3d;
    background-color: #eceeef;
    border-color: #ddd;
  }

  ${props =>
    props.isActive &&
    css`
      cursor: default;
    `}
`;
