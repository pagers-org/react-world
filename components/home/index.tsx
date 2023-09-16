import { ArticleSection } from './article-section';
import { Banner } from './banner';
import { TagList } from './tag-list';

export const Home = () => {
  return (
    <div className="home-page">
      <Banner />

      <div className="page container">
        <div className="row">
          <div className="col-md-9">
            <ArticleSection />
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              <TagList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
