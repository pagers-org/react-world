import { http } from '@/libs/http';
import { Article, NewArticle } from '@/types';

// 전제 Article 조회
const fetchArticles = (limit = 20) => {
  return http.get(`https://api.realworld.io/api/articles?limit=${limit}`);
};

// Tag로 Article 조회
const fetchArticlesWithTag = (tag: string, limit = 20) => {
  return http.get(`https://api.realworld.io/api/articles?limit=${limit}&tag=${tag}`);
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

export { fetchArticles, fetchArticlesWithTag, fetchArticle, registerArticle, updateArticle, deleteArticle };
