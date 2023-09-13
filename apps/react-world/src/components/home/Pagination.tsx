import { PaginationContainer, PageButton } from './Pagination.styled';

interface PaginationProps {
  pages: number[];
  activePage: number;
}

const Pagination = ({ pages, activePage }: PaginationProps) => {
  return (
    <PaginationContainer>
      {pages.map(page => (
        <PageButton key={page} href="#" isActive={page === activePage}>
          {page}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
