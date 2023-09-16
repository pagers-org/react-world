import { request } from "lib/request";

import type { ArticlesParams, ArticlesResponse } from "./article-repository.types";

class ArticleRepository {
  findAll(params?: ArticlesParams): Promise<ArticlesResponse> {
    return request.get<ArticlesResponse, ArticlesParams>("/articles", params);
  }
}

export const articleRepository = new ArticleRepository();
