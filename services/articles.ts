import { http } from '@/utils/http';

const getArticlesAPI = (offset = 0, limit = 20) => {
  return http.get(`/articles?limit=${limit}&offset=${offset ? offset * limit : 0}`);
};

const getArticlesWithTagAPI = (tag: string, offset = 0, limit = 10) => {
  return http.get(`/articles?tag=${tag}&limit=${limit}&offset=${offset ? offset * limit : 0}`);
};

const getArticlesWithAuthorAPI = (username: string, offset = 0, limit = 10) => {
  return http.get(`/articles?author=${username}&limit=${limit}&offset=${offset ? offset * limit : 0}`);
};

const getArticlesWithFavoritedAPI = (username: string, offset = 0, limit = 10) => {
  return http.get(`/articles?favorited=${username}&limit=${limit}&offset=${offset ? offset * limit : 0}`);
};

const getArticlesFeed = (offset = 0, auth: string, limit = 10) => {
  console.log('Feed');

  console.log(auth);

  return http.get(`/articles/feed?limit=${limit}&offset=${offset ? offset * limit : 0}`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Token ${auth}`,
    },
  });
};

const getArticleAPI = (slug: string) => {
  return http.get(`/articles/${slug}`);
};

export {
  getArticlesAPI,
  getArticlesWithAuthorAPI,
  getArticlesWithFavoritedAPI,
  getArticlesWithTagAPI,
  getArticlesFeed,
  getArticleAPI,
};
