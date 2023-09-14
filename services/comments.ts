import { http } from '@/libs/http';

const getComments = (slug: string) => {
  return http.get(`https://api.realworld.io/api/articles/${slug}/comments`);
};

const createComment = (slug: string) => {
  return http.post(`https://api.realworld.io/api/articles/${slug}/comments`);
};

const deleteComment = (slug: string, id: string) => {
  return http.delete(`https://api.realworld.io/api/articles/${slug}/comments/${id}`);
};

export { getComments, createComment, deleteComment };
