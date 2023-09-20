import { useQuery } from '@tanstack/react-query';
import ArticleService from '../apis/article/ArticleService';
import type { ArticleDetailResponse } from '../apis/article/ArticleService.types';

export const ARTICLE_DETAIL_CACHE_KEY = '@article/detail';

const useArticleDetailQuery = (slug: string) => {
  const queryResult = useQuery<ArticleDetailResponse, Error>(
    [ARTICLE_DETAIL_CACHE_KEY, slug], // 슬러그를 조합해 QueryKey 지정
    () => ArticleService.fetchArticleDetail(slug),
  );

  return {
    articleDetail: queryResult.data,
    isArticleDetailLoading: queryResult.isLoading,
  };
};

export default useArticleDetailQuery;
