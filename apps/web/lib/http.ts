import type { z, ZodType } from "zod";
import { ZodError } from "zod";
import { UserErrorsSchema } from "../app/(auth)/_types";

const HTTP_ERRORS = {
  BAD_REQUEST: "잘못된 요청: 요청이 잘못되었습니다.",
  UNAUTHORIZED: "인증되지 않음: 인증이 필요합니다.",
  FORBIDDEN: "금지됨 : 이 리소스에 액세스 권한이 없습니다.",
  NOT_FOUND: "찾을 수 없음: 요청한 리소스를 찾을 수 없습니다.",
  INTERNAL_SERVER_ERROR: "내부 서버 오류: 서버에서 오류가 발생했습니다.",
  ALREADY_TOKEN: "토큰 : 이미 토큰이 있습니다.",
};

export const httpErrorHandler = (e: unknown, statusCode?: number): never => {
  switch (statusCode) {
    case 400:
      throw new Error(HTTP_ERRORS.BAD_REQUEST);
    case 401:
      throw new Error(HTTP_ERRORS.UNAUTHORIZED);
    case 403:
      throw new Error(HTTP_ERRORS.FORBIDDEN);
    case 404:
      throw new Error(HTTP_ERRORS.NOT_FOUND);
    case 422:
      throw new Error(HTTP_ERRORS.ALREADY_TOKEN);
    case 500:
      throw new Error(HTTP_ERRORS.INTERNAL_SERVER_ERROR);
    default:
      if (e instanceof ZodError) {
        throw new Error(`유효성 검사 오류`);
      } else {
        throw new Error(`HTTP 오류`);
      }
  }
};

export const createHeaders = (accessToken?: string): Record<string, string> => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return headers;
};

export const buildUrl = (url: string): string => `${"https://api.realworld.io/api"}${url}`;

export const http = {
  async get<Response>({ url, accessToken, schema }: { url: string; accessToken?: string; schema: ZodType<Response> }) {
    const headers = createHeaders(accessToken);

    const res = await fetch(buildUrl(url), {
      method: "GET",
      headers,
    });

    if (!res.ok) {
      httpErrorHandler(new Error(`HTTP Error: ${res.statusText}`), res.status);
    }

    const obj = schema.parse(await res.json());
    return obj;
  },
  async post<Request, Response>({
    url,
    accessToken,
    schema,
    body,
  }: {
    url: string;
    accessToken?: string;
    schema: ZodType<Response>;
    body: Request;
  }) {
    const headers = createHeaders(accessToken);

    const res = await fetch(buildUrl(url), {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      httpErrorHandler(new Error(`HTTP Error: ${res.statusText}`), res.status);
    }

    const obj = schema.parse(await res.json());
    return obj;
  },
};
