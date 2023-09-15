/* global RequestInit */
import { serializeQuery } from "lib/query";
import type { Maybe } from "types/utilities";

import type { RequestMethod, RequestStrategy } from "./request-strategy";

type NextRequestConfig = Omit<RequestInit, "method" | "body"> & {
  accessToken?: string;
};

type Headers = Record<string, string>;

export class NextRequestStrategy implements RequestStrategy<NextRequestConfig> {
  async request<R, D = unknown>(method: RequestMethod, path: string, data?: D, config?: NextRequestConfig): Promise<R> {
    const response = await fetch(...configure(method, path, data, config));

    return response.json() as Promise<R>;
  }
}

const configure = <D>(
  method: RequestMethod,
  path: string,
  data?: D,
  config?: NextRequestConfig,
): [input: string, init: RequestInit] => {
  const headers = createHeaders(config);

  const options: RequestInit = {
    method,
    headers,
    ...config,
  };

  const isGetMethod = method === "GET";

  if (!isGetMethod) {
    options.body = JSON.stringify(data);
  }

  const url = attachQuery(createUrl(path), isGetMethod ? data : undefined);

  return [url, options];
};

const createUrl = (path: string): string => `${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`;

const createHeaders = (config?: NextRequestConfig): Headers => {
  const headers: Headers = {
    "Content-Type": "application/json",
    ...(config?.headers as Maybe<Headers>),
  };

  if (config?.accessToken) {
    headers.Authorization = `Bearer ${config.accessToken}`;
  }

  return headers;
};

const attachQuery = <T>(path: string, query?: T): string => {
  return `${path}${query ? serializeQuery(query) : ""}`;
};
