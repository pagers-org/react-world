import { ArticleResponseType } from "@/types/articles";
import { executeAPI } from "./app";

export const getArticles = async (): Promise<ArticleResponseType> => {
  const result = await executeAPI({
    method: "GET",
    url: "/articles",
  });
  return result;
};
