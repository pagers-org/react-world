"use client";

import Link from "next/link";
import { DEFAULT_ARTICLES_LIMIT } from "../(articles)/_constants";

interface PaginationProps {
  articlesCount: number;
  currentPage: number;
}

export default function Pagination({ articlesCount, currentPage }: PaginationProps): JSX.Element {
  const articlesPageCount = Math.ceil(articlesCount / DEFAULT_ARTICLES_LIMIT);

  const pages = Array.from({ length: articlesPageCount }, (_, page) => page + 1);

  return (
    <ul className="pagination">
      {pages.map(page => (
        <li className={`page-item ${page === currentPage ? "active" : ""}`} key={page}>
          <Link
            className="page-link"
            href={{
              pathname: `${page}`,
            }}
          >
            {page}
          </Link>
        </li>
      ))}
    </ul>
  );
}
