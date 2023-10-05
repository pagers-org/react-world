import { useQuery } from '@tanstack/react-query';
import type { ArticleCommentsResponse } from '@/apis/article/ArticleService.types';
import ArticleService from '@/apis/article/ArticleService';

export const ARTICLE_COMMENTS_CACHE_KEY = '@article/comments';

const useArticleCommentsQuery = (slug: string) => {
  const queryResult = useQuery<ArticleCommentsResponse, Error>(
    [ARTICLE_COMMENTS_CACHE_KEY, slug], // 슬러그를 조합해 QueryKey 지정
    () => ArticleService.fetchArticleComments(slug),
  );

  return {
    articleComments: queryResult.data,
    isArticleCommentsLoading: queryResult.isLoading,
  };
};

export default useArticleCommentsQuery;
