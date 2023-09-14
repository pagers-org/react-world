import { API_BASE_URL } from '@/constants/env';
import { http } from '@/libs/http';
import { Article, NewArticle } from '@/types';

const ArticleAPI = {
  all: async (offset?: number, limit = 10) => {
    return fetch(`${API_BASE_URL}/articles?limit=${limit}&offset=${offset ? offset * limit : 0}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then(res => {
      if (!(res.status === 200)) {
        throw new Error('Error');
      }
      return res.json();
    });
  },
  byTag: async (tag: string, offset = 0, limit = 10) => {
    return fetch(`${API_BASE_URL}/articles?tag=${tag}&limit=${limit}&offset=${offset ? offset * limit : 0}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then(res => {
      if (!(res.status === 200)) {
        throw new Error('Error');
      }
      return res.json();
    });
  },
  favorite: (slug: string) => {
    return fetch(`${API_BASE_URL}/articles/${slug}/favorite`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then(res => {
      if (!(res.status === 201)) {
        throw new Error('Error');
      }
      return res.json();
    });
  },
  unFavorite: (slug: string) => {
    return fetch(`${API_BASE_URL}/articles/${slug}/favorite`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then(res => {
      if (!(res.status === 201)) {
        throw new Error('Error');
      }
      return res.json();
    });
  },
};

// 전제 Article 조회
const fetchArticles = (limit = 20) => {
  return http.get(`https://api.realworld.io/api/articles?limit=${limit}`);
};

// Tag로 Article 조회
const fetchArticlesWithTag = (tag: string, limit = 20) => {
  return http.get(`https://api.realworld.io/api/articles?limit=${limit}&tag=${tag}`);
};

// Follow한 user의 Article 조회
const fetchFollowArticles = async () => {
  return await http.get('https://api.realworld.io/api/articles/feed');
};

// Article 작성
const registerArticle = (article: NewArticle) => {
  return http.post('https://api.realworld.io/api/articles', article);
};

// Article 단건 조회
const fetchArticle = async (slug: string): Promise<Article> => {
  return http.get(`https://api.realworld.io/api/articles/${slug}`).then(res => res.article);
};

// Article 수정
const updateArticle = (slug: string) => {
  return http.put(`https://api.realworld.io/api/articles/${slug}`);
};

// Article 삭제
const deleteArticle = (slug: string) => {
  return http.delete(`https://api.realworld.io/api/articles/${slug}`);
};

export {
  fetchArticles,
  fetchArticlesWithTag,
  fetchFollowArticles,
  fetchArticle,
  registerArticle,
  updateArticle,
  deleteArticle,
  ArticleAPI,
};
