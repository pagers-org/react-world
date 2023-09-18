import { http } from "../../../lib/http";
import type { ArticlesDTO, ArticlesQueryParamsType } from "../_types/articles.types";
import { ArticlesResponseSchema } from "../_types/articles.types";

export const getArticles = (params: ArticlesQueryParamsType): Promise<ArticlesDTO | undefined> => {
  const newSearchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    newSearchParams.append(key, `${value}`);
  });

  return http.get({
    url: `/articles?${newSearchParams.toString()}`,
    schema: ArticlesResponseSchema,
  });
};
