import { useState, useEffect, useCallback, useRef } from "react";

import type { Articles } from "@/types/article";
import httpClient from "@/services/http-client";
import { makeSearchParams } from "@/utils/url";
import { CONTENT_LIMIT } from "@/constants/pagination";

interface Props {
  data: Articles;
  page: number;
  tag: string;
}

const useArticles = ({ data, page, tag }: Props) => {
  const [articles, setArticles] = useState<Articles>(data);
  const [isLoading, setLoading] = useState(false);
  const isMounted = useRef(false);

  const getArticles = useCallback(async () => {
    try {
      setLoading(true);
      const response = await httpClient.get(
        `/articles?${makeSearchParams({
          offset: `${page * CONTENT_LIMIT}`,
          limit: `${CONTENT_LIMIT}`,
          ...(tag !== "global" && { tag }),
        })}`,
      );

      setArticles(response);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [page, tag]);

  useEffect(() => {
    if (isMounted.current) {
      getArticles();
    }
  }, [page, getArticles, tag]);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    }
  }, []);

  return { articles, isLoading };
};

export default useArticles;
