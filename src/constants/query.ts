import { LoginInfo } from "@/service/login";

export const QUERY_KEY = {
  ARTICLE: {
    LIST: (page: number) => ['articles', page],
  },
  LOGIN : {
    INFO: (loginInfo: LoginInfo) => ['loginInfo', loginInfo]
  }
} as const;
