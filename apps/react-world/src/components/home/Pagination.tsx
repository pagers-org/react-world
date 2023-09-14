import { PaginationContainer, PageButton } from './Pagination.styled';

interface PaginationProps {
  totalPages: number;
  activePageIndex: number;
  onPageChange: (newPageIndex: number) => void;
}

const Pagination = ({
  totalPages,
  activePageIndex,
  onPageChange,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (pageIndex: number) => {
    if (pageIndex !== activePageIndex) {
      onPageChange(pageIndex);
    }
  };

  return (
    <PaginationContainer>
      {pages.map((page, index) => (
        <PageButton
          key={page}
          href="#"
          isActive={index === activePageIndex}
          onClick={() => handlePageClick(index)}
        >
          {page}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
