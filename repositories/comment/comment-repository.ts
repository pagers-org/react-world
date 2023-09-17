import { request } from "lib/request";

import type { CommentsResponse } from "./comment-repository.types";

class CommentRepository {
  findAll(slug: string): Promise<CommentsResponse> {
    return request.get<CommentsResponse>(`/articles/${slug}/comments`);
  }
}

export const commentRepository = new CommentRepository();
