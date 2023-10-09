import type { GetArticle, GetArticleList, MultipleArticles } from './article.types';

export const getArticle: GetArticle = async ({ slug }) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/articles/${slug}`);
  const results: Awaited<ReturnType<GetArticle>> = await response.json();
  return results;
};

export const getArticleList: GetArticleList = async ({ offset = '0', limit = '10' }) => {
  const calcOffset = (Number(offset) - 1) * Number(limit) + 1;

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/articles?offset=${calcOffset}&limit=${
      calcOffset + Number(limit) - 1
    }`,
  );
  const results: MultipleArticles = await response.json();
  return results;
};
