import { useState } from "react";

export const usePagination = (limit: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [offset, setOffset] = useState(0);

  const currentPageHandler = async (e: React.MouseEvent) => {
    const pageNumber = Number(e.currentTarget.textContent);
    setCurrentPage(pageNumber);
    setOffset((pageNumber - 1) * limit);
  };

  return { currentPage, currentPageHandler, offset };
};
