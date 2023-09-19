import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { ArticlesDTO, ArticlesQueryParamsType } from "../_types/articles.types";
import { queryKeys } from "../_constants/querykeys";
import { getArticles } from "../_api/get-articles";

export const useGetArticles = (
  params: ArticlesQueryParamsType = {
    offset: 0,
    limit: 10,
  }
): UseQueryResult<ArticlesDTO | undefined, Error> =>
  useQuery(queryKeys.articles(params), () => getArticles(params), {
    suspense: true,
  });
