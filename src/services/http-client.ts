class HttpClient {
  private baseURL: string;
  private headers: HeadersInit;

  constructor() {
    this.baseURL = import.meta.env.PUBLIC_BASE_URL;
    this.headers = {
      "Content-type": "application/json",
    };
  }

  async get(url: string, params?: RequestInit) {
    const response = await fetch(`${this.baseURL}/${url}`, {
      method: "GET",
      headers: this.headers,
      ...params,
    });

    return await response.json();
  }

  async post(url: string, data?: BodyInit | null, options?: Omit<RequestInit, "body">) {
    const response = await fetch(`${this.baseURL}/${url}`, {
      method: "POST",
      ...(data && { body: data }),
      headers: this.headers,
      ...options,
    });
    return await response.json();
  }

  async put(url: string, data?: BodyInit | null) {
    const response = await fetch(`${this.baseURL}/${url}`, {
      method: "PUT",
      headers: this.headers,
      ...(data && { body: data }),
    });
    return await response.json();
  }

  async delete(url: string) {
    const response = await fetch(`${this.baseURL}/${url}`, {
      method: "DELETE",
      headers: this.headers,
    });
    return await response.json();
  }

  async patch(url: string, data: BodyInit | null) {
    const response = await fetch(`${this.baseURL}/${url}`, {
      method: "DELETE",
      headers: this.headers,
      ...(data && { body: data }),
    });
    return await response.json();
  }
}

export default new HttpClient();
