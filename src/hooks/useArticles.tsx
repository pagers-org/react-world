import { useState, useEffect, useCallback } from "react";

import type { Articles } from "@/types/article";
import httpClient from "@/services/http-client";
import { makeSearchParams } from "@/utils/url";
import { CONTENT_LIMIT } from "@/constants/pagination";

interface Props {
  data: Articles;
  page: number;
}

const useArticles = ({ data, page }: Props) => {
  const [articles, setArticles] = useState<Articles>(data);
  const [isLoading, setLoading] = useState(false);

  const getArticles = useCallback(async () => {
    try {
      setLoading(true);
      const response = await httpClient.get(
        `/articles?${makeSearchParams({
          offset: `${page * CONTENT_LIMIT}`,
          limit: `${CONTENT_LIMIT}`,
        })}`,
      );

      setArticles(response);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    getArticles();
  }, [page, getArticles]);

  return { articles, isLoading };
};

export default useArticles;
