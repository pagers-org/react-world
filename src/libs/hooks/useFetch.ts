import { useState, useCallback, useEffect, useRef } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>();
  const activeHttpRequests = useRef<AbortController[]>([]);

  const sendRequest = useCallback(
    async (
      url: string,
      method: string = "GET",
      body: any = null,
      headers: Record<string, string> = {}
    ): Promise<any> => {
      setIsLoading(true);

      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        const requestOptions: RequestInit = {
          method: method,
          headers: headers,
          signal: httpAbortCtrl.signal,
        };

        // POST 요청일 경우에만 credentials 포함
        if (method === "POST") {
          requestOptions.credentials = "include";
        }

        // body가 제공된 경우에만 body 포함
        if (body) {
          requestOptions.body = body;
        }

        const res = await fetch(url, requestOptions);

        const data = await res.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        if (!res.ok) {
          return data;
        }

        setIsLoading(false);
        return data;
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
        setIsLoading(false);

        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError, setError };
};

export default useFetch;
