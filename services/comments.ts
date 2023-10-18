import { http } from '@/utils/http';

const getComments = (slug: string) => {
  return http.get(`/articles/${slug}/comments`);
};

const createComment = (slug: string) => {
  return http.post(`/articles/${slug}/comments`);
};

const deleteComment = (slug: string, id: string) => {
  return http.delete(`/articles/${slug}/comments/${id}`);
};

export { getComments, createComment, deleteComment };
