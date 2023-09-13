export const QUERY_KEY = {
  ARTICLE: {
    LIST: (page: number) => ['article', 'list', page],
  },
  TAG: {
    LIST: ['tag', 'list'],
  },
} as const;
