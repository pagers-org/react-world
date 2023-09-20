import { LoginInfo } from '@/service/login';

export const QUERY_KEY = {
  ARTICLE: {
    LIST: (page: number, tab: number) => ['articles', page, tab],
  },
  LOGIN: {
    INFO: (loginInfo: LoginInfo) => ['loginInfo', loginInfo],
  },
} as const;
