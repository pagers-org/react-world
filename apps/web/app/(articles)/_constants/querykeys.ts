import type { ArticlesQueryParamsType } from "../_types/articles.types";

export const queryKeys = {
  articles: (params: ArticlesQueryParamsType) => ["articles", params] as const,
};
