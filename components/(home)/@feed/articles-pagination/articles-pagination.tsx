"use client";

import { Pagination } from "components/shared/ui/pagination";
import { ARTICLES_PER_PAGE } from "constants/articles";

import { usePagination } from "./articles-pagination.hooks";

type Props = {
  articlesCount: number;
};

export const ArticlesPagination = ({ articlesCount }: Props) => {
  const { total, current, handlePageChange } = usePagination(articlesCount, ARTICLES_PER_PAGE);

  return (
    <div className="flex w-full justify-center pb-10">
      <Pagination total={total} current={current} onPageChange={handlePageChange} />
    </div>
  );
};
