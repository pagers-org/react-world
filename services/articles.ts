import { http } from '@/utils/http';

const getArticlesAPI = (offset = 0, limit = 10) => {
  return http.get(`/articles?limit=${limit}&offset=${offset ? offset * limit : 0}`);
};

const getArticlesWithTagAPI = (tag: string, offset = 0, limit = 10) => {
  return http.get(`/articles?tag=${tag}&limit=${limit}&offset=${offset ? offset * limit : 0}`);
};

const favoriteAPI = (slug: string) => {
  return http.post(`/articles/${slug}/favorite`);
};

const unFavoriteAPI = (slug: string) => {
  return http.delete(`/articles/${slug}/favorite`);
};

export { getArticlesAPI, getArticlesWithTagAPI, favoriteAPI, unFavoriteAPI };
