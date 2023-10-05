import { useQuery } from '@tanstack/react-query';
import PopularArticleTagService from '@/apis/article/PopularArticleTagService';

export const POPULAR_ARTICLE_TAG_CACHE_KEY = '@article/popular_tags';

const usePopularArticleTagsQuery = () => {
  PopularArticleTagService;
  const queryResult = useQuery([POPULAR_ARTICLE_TAG_CACHE_KEY], () =>
    PopularArticleTagService.fetchPopularArticleTags(),
  );

  return {
    popularArticleTags: queryResult.data,
    isPopularArticleTagsLoading: queryResult.isLoading,
  };
};

export default usePopularArticleTagsQuery;
