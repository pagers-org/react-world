import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface PaginationProps {
  pages: number[];
  activePage: number;
}

const Pagination = ({ pages, activePage }: PaginationProps) => {
  return (
    <PaginationContainer>
      {pages.map(page => (
        <PageItem key={page} isActive={page === activePage}>
          <PageLink href="#">{page}</PageLink>
        </PageItem>
      ))}
    </PaginationContainer>
  );
};

const PaginationContainer = styled.ul`
  display: inline-block;
  padding-left: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
`;

const PageItem = styled.li<{ isActive: boolean }>`
  display: inline;

  &:first-of-type a {
    margin-left: 0;
    border-bottom-left-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }

  &:last-of-type a {
    border-bottom-right-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      a,
      a:focus,
      a:hover {
        z-index: 2;
        color: #fff;
        cursor: default;
        background-color: #5cb85c;
        border-color: #5cb85c;
      }
    `}
`;

const PageLink = styled.a`
  position: relative;
  float: left;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  color: #5cb85c;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;

  &:focus,
  &:hover {
    color: #3d8b3d;
    background-color: #eceeef;
    border-color: #ddd;
  }
`;

export default Pagination;
