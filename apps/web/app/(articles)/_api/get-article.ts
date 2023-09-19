import { z } from "zod";
import { http } from "../../../lib/http";
import type { ArticleDTO } from "../_types/articles.types";
import { ArticleResponseSchema } from "../_types/articles.types";

export const getArticle = (slug: string): Promise<ArticleDTO | undefined> => {
  return http.get({
    url: `/articles/${slug}`,
    schema: ArticleResponseSchema,
  });
};
