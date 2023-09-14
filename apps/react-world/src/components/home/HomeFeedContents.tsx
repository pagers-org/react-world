import { Container } from '../shared/Container';
import ArticlePreview from './ArticlePreview';
import PopularArticleTagList from './PopularArticleTagList';
import HomeFeedTab from './HomeFeedTab';
import Pagination from './Pagination';
import useArticlePreviewQuery from '../../quries/useArticlePreviewQuery';

const HomeFeedContents = () => {
  // TODO: Zustand Store 에서 초기값을 지정하고, 이후 현재 페이지 정보를 가지도록 구현 필요
  const { data, isLoading } = useArticlePreviewQuery(1);

  return (
    <Container>
      <div className="row">
        <div className="col-md-9">
          <HomeFeedTab activeFeed="global_feed" />
          {isLoading ? (
            <span>Loading Articles...</span>
          ) : (
            <>
              {data?.articles?.map(articlePreview => (
                <ArticlePreview
                  key={articlePreview.slug}
                  articlePreview={articlePreview}
                />
              ))}
              <Pagination pages={[1, 2]} activePage={1} />
            </>
          )}
        </div>

        {isLoading ? null : (
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
        )}
      </div>
    </Container>
  );
};

export default HomeFeedContents;
