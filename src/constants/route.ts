export const ROUTE = {
  HOME: '/',
  SIGNIN: '/login',
  SIGNUP: '/register',
  USER_SETTING: '/setting',
  NEW_ARTICLE: '/new',
  ARTICLE_DETAIL: (slug: string) => `/detail/${slug}`,
  USER_ARTICLE_PAGE: (userId: string) => `/user/${userId}`,


} as const;
