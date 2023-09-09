"use client";

import Link from "next/link";

import { forwardRef, useMemo, useState } from "react";

import { clsx } from "lib/clsx";
import { array } from "utils/array";

type Props = {
  total: number;
};

export const Pagination = forwardRef<HTMLUListElement, Props>(({ total }, ref) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const pages = useMemo(() => array(total, (index) => index + 1), [total]);

  const handlePageClick = (page: number) => () => setCurrentPage(page);

  const isActive = (page: number) => page === currentPage;

  return (
    <ul ref={ref} className="pagination">
      {pages.map((page) => (
        <li key={page} className={clsx("page-item", { active: isActive(page) })} onClick={handlePageClick(page)}>
          <Link className="page-link" href="">
            {page}
          </Link>
        </li>
      ))}
    </ul>
  );
});
