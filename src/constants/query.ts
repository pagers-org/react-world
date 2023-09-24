export const QUERY_KEY = {
  ARTICLE: {
    LIST: (page: number) => ['articles', page],
  },
} as const;
