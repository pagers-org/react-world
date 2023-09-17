import { PaginationContainer, PageButton } from './Pagination.styled';

interface PaginationProps {
  totalPages: number;
  activePageIndex: number;
}

const Pagination = ({ totalPages, activePageIndex }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationContainer>
      {pages.map((page, index) => (
        <PageButton key={page} href="#" isActive={index === activePageIndex}>
          {page}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
