import { NextRequestStrategy } from "./strategy/next-request-strategy";
import type { RequestStrategy } from "./strategy/request-strategy";

class Request<T> {
  private readonly strategy: RequestStrategy<T>;

  constructor(strategy: RequestStrategy<T>) {
    this.strategy = strategy;
  }

  get<R, D = unknown>(path: string, data?: D, config?: T): Promise<R> {
    return this.strategy.request<R, D>("GET", path, data, config);
  }

  post<R, D = unknown>(path: string, data?: D, config?: T): Promise<R> {
    return this.strategy.request<R, D>("POST", path, data, config);
  }

  put<R, D = unknown>(path: string, data?: D, config?: T): Promise<R> {
    return this.strategy.request<R, D>("PUT", path, data, config);
  }

  delete<R, D = unknown>(path: string, data?: D, config?: T): Promise<R> {
    return this.strategy.request<R, D>("DELETE", path, data, config);
  }
}

export const request = new Request(new NextRequestStrategy());
