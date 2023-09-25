interface ExecuteAPIProps {
  method: "GET" | "POST" | "PUT" | "DELETE";
  token?: string;
  body?: any;
  url: string;
}

const API_ENDPINT = "https://api.realworld.io/api";

export const executeAPI = async ({ method, body, url }: ExecuteAPIProps) => {
  const promise_api = await fetch(`${API_ENDPINT}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      credentials: "include",
    },
    body: JSON.stringify(body),
  });

  const response = await promise_api.json();

  return response;
};
