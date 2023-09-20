import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import type { ArticleDTO } from "../_types/articles.types";
import { queryKeys } from "../_constants/querykeys";
import { getArticle } from "../_api/get-article";

export function useGetArticle(slug: string): UseQueryResult<ArticleDTO | undefined, Error> {
  return useQuery(queryKeys.article(slug), () => getArticle(slug), {
    suspense: true,
  });
}
