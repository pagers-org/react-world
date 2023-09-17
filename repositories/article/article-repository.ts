import { request } from "lib/request";

import type { ArticleResponse, ArticlesParams, ArticlesResponse } from "./article-repository.types";

class ArticleRepository {
  findAll(params?: ArticlesParams): Promise<ArticlesResponse> {
    return request.get<ArticlesResponse, ArticlesParams>("/articles", params);
  }

  findOne(slug: string): Promise<ArticleResponse> {
    return request.get<ArticleResponse>(`/articles/${slug}`, undefined);
  }
}

export const articleRepository = new ArticleRepository();
