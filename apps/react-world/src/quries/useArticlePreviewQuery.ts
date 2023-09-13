import { useQuery } from '@tanstack/react-query';
import ArticlePreviewService from '../apis/article/ArticlePreviewService';

export const ARTICLE_PREVIEW_CACHE_KEY = '@article/preview';

const useArticlePreviewQuery = (pageNumber: number) => {
  ArticlePreviewService;
  return useQuery(
    [ARTICLE_PREVIEW_CACHE_KEY, pageNumber], // 페이지 번호를 조합해 QueryKey 지정
    () => ArticlePreviewService.fetchArticlePreviews(pageNumber),
  );
};

export default useArticlePreviewQuery;
