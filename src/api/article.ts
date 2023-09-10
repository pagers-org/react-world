import type { GetArticleList, MultipleArticles } from './article.types';

export const getArticleList: GetArticleList = async ({ offset = '0', limit = '10' }) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/articles?offset=${offset}&limit=${limit}`,
  );
  const results: MultipleArticles = await response.json();
  return results;
};
