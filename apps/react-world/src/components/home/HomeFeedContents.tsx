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

type StandardFeedType = 'my' | 'global';
type ArticleTagFeedType = string; // 아티클 태그는 어떤 문자열이든 가능

export type HomeFeedType = StandardFeedType | ArticleTagFeedType;

interface HomeFeedContentsProps {
  feedType: HomeFeedType;
  page: number;
}

const HomeFeedContents = (props: HomeFeedContentsProps) => {
  const { feedType, page } = props;

  const [currentPageIndex, setCurrentPageIndex] = useState(page - 1);
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
    window.scrollTo(0, 0); // 전처리 후 페이지 이동시 스크롤 위치가 최상단으로 안 가있는 문제 수정
  };

  return (
    <Container>
      <div className="row">
        <div className="col-md-9">
          <HomeFeedTab activeFeed={feedType} />
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
