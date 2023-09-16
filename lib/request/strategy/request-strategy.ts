export type RequestMethod = "POST" | "GET" | "PUT" | "DELETE";

export interface RequestStrategy<T = unknown> {
  request<R, D = unknown>(method: RequestMethod, url: string, data?: D, config?: T): Promise<R>;
}
