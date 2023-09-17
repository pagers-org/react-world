import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Container } from '../shared/Container';
import ArticlePreview from './ArticlePreview';
import PopularArticleTagList from './PopularArticleTagList';
import HomeFeedTab from './HomeFeedTab';
import Pagination from './Pagination';
import ArticleService from '../../apis/article/ArticleService';
import useArticlePreviewQuery from '../../quries/useArticlePreviewQuery';
import usePopularArticleTagsQuery from '../../quries/usePopularArticleTagsQuery';
import { ARTICLE_PREVIEW_FETCH_LIMIT } from '../../apis/article/ArticlePreviewService';
import { ARTICLE_DETAIL_CACHE_KEY } from '../../quries/useArticleDetailQuery';

const HomeFeedContents = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const { articlePreviews, isArticlePreviewsLoading } =
    useArticlePreviewQuery(currentPageIndex);
  const { popularArticleTags, isPopularArticleTagsLoading } =
    usePopularArticleTagsQuery();
  const handlePageChange = (newPageIndex: number) => {
    setCurrentPageIndex(newPageIndex);
  };

  const totalPageCount = articlePreviews?.articlesCount
    ? Math.ceil(articlePreviews.articlesCount / ARTICLE_PREVIEW_FETCH_LIMIT)
    : 0;

  // 아티클 상세 페이지로 이동시 데이터 prefetch 이후 이동하도록 함
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleArticleClick = async (
    articleSlug: string,
    articleLink: string,
  ) => {
    await queryClient.prefetchQuery(
      [ARTICLE_DETAIL_CACHE_KEY, articleSlug],
      () => ArticleService.fetchArticleDetail(articleSlug),
    );
    navigate(articleLink);
  };

  return (
    <Container>
      <div className="row">
        <div className="col-md-9">
          <HomeFeedTab activeFeed="global_feed" />
          {isArticlePreviewsLoading ? (
            <span
              style={{
                display: 'inline-block',
                padding: '15px',
              }}
            >
              Loading Articles...
            </span>
          ) : (
            <>
              {articlePreviews?.articles?.map(articlePreview => (
                <ArticlePreview
                  key={articlePreview.slug}
                  articlePreview={articlePreview}
                  onArticleClick={handleArticleClick}
                />
              ))}
              <Pagination
                totalPages={totalPageCount}
                activePageIndex={currentPageIndex}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
        {isPopularArticleTagsLoading ? null : (
          <PopularArticleTagList tags={popularArticleTags?.tags ?? []} />
        )}
      </div>
    </Container>
  );
};

export default HomeFeedContents;
