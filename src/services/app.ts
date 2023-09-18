interface ExecuteAPIProps {
  method: "GET" | "POST" | "PUT" | "DELETE";
  token?: string;
  body?: any;
  url: string;
}

const API_ENDPINT = "https://api.realworld.io/api";

export const executeAPI = async ({ method, body, url }: ExecuteAPIProps) => {
  const token = localStorage.getItem("token");
  const authorization = `Bearer ${token}`;

  const promise_api = await fetch(`${API_ENDPINT}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: token ? authorization : "",
    },
    body: JSON.stringify(body),
  });

  const response = await promise_api.json();

  if (!response.success) {
    console.error(response.message);
  }

  return response;
};
