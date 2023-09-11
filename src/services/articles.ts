import { ArticleResponseType, GetArticlesInputParams } from "@/types/articles";
import { executeAPI } from "./app";

export const getArticles = async (params?: Partial<GetArticlesInputParams>): Promise<ArticleResponseType> => {
  const result = await executeAPI({
    method: "GET",
    url: "/articles?" + new URLSearchParams(params as Record<string, string>).toString(),
  });
  return result;
};
