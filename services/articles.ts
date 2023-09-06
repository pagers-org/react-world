import { http } from '@/libs/http';

const fetchArticles = (limit = 20) => {
  return http.get(`https://api.realworld.io/api/articles?limit=${limit}`);
};

const fetchArticlesWithTag = (tag: string, limit = 20) => {
  return http.get(`https://api.realworld.io/api/articles?limit=${limit}&tag=${tag}`);
};

export { fetchArticles, fetchArticlesWithTag };
