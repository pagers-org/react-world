import { Navbar } from '../components/NavBar';
import { HomeBanner } from '../components/home/HomeBanner';
import { Footer } from '../components/Footer';
import HomeFeedTab from '../components/home/HomeFeedTab';
import ArticleTagList from '../components/home/ArticleTagList';
import ArticlePreview from '../components/home/ArticlePreview';
import Pagination from '../components/home/Pagination';

export const HomePage = () => {
  return (
    <>
      <Navbar />

      <div className="home-page">
        <HomeBanner />

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <HomeFeedTab activeFeed="global_feed" />

              <ArticlePreview
                authorProfileLink="/profile/eric-simons"
                authorProfileImageUrl="http://i.imgur.com/Qr71crq.jpg"
                authorName="Eric Simons"
                publishDate="January 20th"
                likeCount={29}
                articleLink="/article/how-to-build-webapps-that-scale"
                articleTitle="How to build webapps that scale"
                articleDescription="This is the description for the post."
                tags={['realworld', 'implementations']}
              />

              <ArticlePreview
                authorProfileLink="/profile/albert-pai"
                authorProfileImageUrl="http://i.imgur.com/N4VcUeJ.jpg"
                authorName="Albert Pai"
                publishDate="January 20th"
                likeCount={32}
                articleLink="/article/the-song-you"
                articleTitle="The song you won't ever stop singing. No matter how hard you try."
                articleDescription="This is the description for the post."
                tags={['realworld', 'implementations']}
              />

              <Pagination pages={[1, 2]} activePage={1} />
            </div>

            <ArticleTagList
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
        </div>
      </div>

      <Footer />
    </>
  );
};
