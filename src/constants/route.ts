export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ARTICLE_DETAIL: (id: number) => `/article/${id}`,
} as const;
