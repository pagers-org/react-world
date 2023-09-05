import { page_container, page_button, active } from "@/styles/pagination.css";
import { color_state } from "@/styles/container.css";

type PaginationProps = {
  pageCount: number;
  currentPage: number;
  handlePageChange: (page: number, offset: number) => void;
};

export default function Pagination({
  pageCount,
  currentPage,
  handlePageChange,
}: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  const limit = 9;

  const handlePageClick = (pageNumber: number) => {
    const offset = (pageNumber - 1) * limit;
    handlePageChange(pageNumber, offset);
  };

  return (
    <div className={`${page_container} ${color_state}`}>
      {pages.map((page) => (
        <button
          key={page}
          className={`${page_button} ${color_state} ${
            currentPage === page ? active : ""
          }`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
