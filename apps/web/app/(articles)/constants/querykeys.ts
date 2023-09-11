import type { ArticlesQueryParamsType } from "../types/articles.types";

export const queryKeys = {
  articles: (params: ArticlesQueryParamsType) => ["articles", params] as const,
};
