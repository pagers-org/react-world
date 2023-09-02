import { type MultipleArticles } from '@/api/article.types';

export const getArticleList = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/articles`);
  const results: MultipleArticles = await response.json();
  return results;
};
