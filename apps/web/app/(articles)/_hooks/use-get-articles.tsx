import type { QueryOptions, UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { ArticlesDTO, ArticlesQueryParamsType } from "../_types/articles.types";
import { queryKeys } from "../_constants/querykeys";
import { getArticles } from "../_api/get-articles";

export const useGetArticles = (
  params: ArticlesQueryParamsType = {
    offset: 0,
    limit: 10,
  },
  options?: QueryOptions<ArticlesDTO, Error, ArticlesDTO, readonly ["articles", ArticlesQueryParamsType]>
): UseQueryResult<ArticlesDTO | undefined, Error> =>
  useQuery(queryKeys.articles(params), () => getArticles(params), options);
