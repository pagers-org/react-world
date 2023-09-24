export const ROUTE = {
  HOME: '/',
  SIGNIN: '/login',
  SIGNUP: '/register',
  ARTICLE_DETAIL: (slug: string) => `/article/${slug}`,
  USER_ARTICLE_PAGE: (userId: string) => `/user/${userId}`,
} as const;
