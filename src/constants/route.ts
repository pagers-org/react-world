export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ARTICLE_DETAIL: (slug: string) => `/article/${slug}`,
} as const;
