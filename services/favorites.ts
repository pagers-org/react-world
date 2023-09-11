import { http } from '@/libs/http';

// Article 좋아요
const favoriteArticle = (slug: string) => {
  return http.post(`https://api.realworld.io/api/articles/${slug}/favorite`);
};

// Article 좋아요 취소
const unFavoriteArticle = (slug: string) => {
  return http.delete(`https://api.realworld.io/api/articles/${slug}/favorite`);
};

export { favoriteArticle, unFavoriteArticle };
