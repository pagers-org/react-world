import { INITIAL_PAGE } from "constants/articles";
import { useQueryParams } from "hooks/use-query-params";

export const usePagination = (count: number, perPage: number) => {
  const total = Math.ceil(count / perPage);

  const { query, set } = useQueryParams<{ page: string }>();

  const current = Number(query.page) || INITIAL_PAGE;

  const handlePageChange = (page: number) => {
    set({ page });
  };

  return {
    total,
    current,
    handlePageChange,
  };
};
