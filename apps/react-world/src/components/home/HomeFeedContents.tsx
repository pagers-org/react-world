import { useState } from 'react';
import { Container } from '../shared/Container';
import ArticlePreview from './ArticlePreview';
import PopularArticleTagList from './PopularArticleTagList';
import HomeFeedTab from './HomeFeedTab';
import Pagination from './Pagination';
import useArticlePreviewQuery from '../../quries/useArticlePreviewQuery';
import { ARTICLE_PREVIEW_FETCH_LIMIT } from '../../apis/article/ArticlePreviewService';

const HomeFeedContents = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const { articlePreviews, isArticlePreviewsLoading } =
    useArticlePreviewQuery(currentPageIndex);

  const handlePageChange = (newPageIndex: number) => {
    setCurrentPageIndex(newPageIndex);
  };

  const totalPageCount = articlePreviews?.articlesCount
    ? Math.ceil(articlePreviews.articlesCount / ARTICLE_PREVIEW_FETCH_LIMIT)
    : 0;

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

        <PopularArticleTagList
          tags={[
            'programming',
            'javascript',
            'emberjs',
            'angularjs',
            'react',
            'mean',
            'node',
            'rails',
          ]}
        />
      </div>
    </Container>
  );
};

export default HomeFeedContents;
