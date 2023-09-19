import type { ArticlesQueryParamsType } from "../_types/articles.types";

export const queryKeys = {
  articles: (params: ArticlesQueryParamsType) => ["articles", params],
  article: (slug: string) => ["articles", slug],
} as const;
