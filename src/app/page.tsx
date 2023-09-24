'use client';

import ProtecTedRoute from '@/composables/ProtectedRoute.tsx/ProtectedRoute';
import { FeedResponseType } from '@/types/article';
import { useEffect, useState } from 'react';

import { getGlobalFeed, getMyFeed } from '@/api/article';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [globalFeeds, setGlobalFeeds] = useState<FeedResponseType | null>();
  const [myFeeds, setMyFeeds] = useState<FeedResponseType | null>();
  const [currentTab, setCurrentTab] = useState<'myFeed' | 'globalFeed'>(
    'globalFeed',
  );
  const [user, setUser] = useState();

  const fetchGlobalFeed = async () => {
    await getGlobalFeed().then((res) => {
      if (res.errors) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
        console.log(res);
        setGlobalFeeds(res);
      }
    });
  };

  const fetchMyFeed = async () => {
    await getMyFeed().then((res) => {
      if (res.errors) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
        console.log(res);
        setGlobalFeeds(res);
      }
    });
  };

  useEffect(() => {
    if (user) {
      setCurrentTab('myFeed');
      fetchMyFeed();
    }
  }, [user]);

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem('user'))?.username);
  }, []);

  useEffect(() => {
    fetchGlobalFeed();
  }, []);

  console.log(globalFeeds);

  return (
    <main className="mb-3 mt-2 flex bg-red-400  text-blue-500">
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  {user && (
                    <li
                      onClick={() => setCurrentTab('myFeed')}
                      className="nav-item"
                    >
                      <p
                        className={`nav-link ${
                          currentTab === 'myFeed' ? 'active' : ''
                        }`}
                      >
                        Your Feed
                      </p>
                    </li>
                  )}
                  <li
                    onClick={() => setCurrentTab('globalFeed')}
                    className="nav-item"
                  >
                    <p
                      className={`nav-link ${
                        currentTab === 'globalFeed' ? 'active' : ''
                      }`}
                    >
                      Global Feed
                    </p>
                  </li>
                </ul>
              </div>

              {currentTab === 'globalFeed' &&
                globalFeeds &&
                globalFeeds?.articles?.map((feed) => {
                  return (
                    <div key={feed.author.username} className="article-preview">
                      <div className="article-meta">
                        <a href="/profile/eric-simons">
                          <img src={feed.author.image} />
                        </a>
                        <div className="info">
                          <a href="/profile/eric-simons" className="author">
                            Eric Simons
                          </a>
                          <span className="date">January 20th</span>
                        </div>
                        <button className="btn btn-outline-primary btn-sm pull-xs-right">
                          <i className="ion-heart"></i> {feed.favoritesCount}
                        </button>
                      </div>
                      <a
                        href={`/article/${feed.slug}`}
                        className="preview-link"
                      >
                        <h1>{feed.slug}</h1>
                        <p>{feed.description}</p>
                        <span>Read more...</span>
                        <ul className="tag-list">
                          {feed.tagList.map((tag) => (
                            <li
                              key={tag}
                              className="tag-default tag-pill tag-outline"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </a>
                    </div>
                  );
                })}
              {currentTab === 'myFeed' && myFeeds?.articles.length > 0 ? (
                myFeeds?.articles.map((feed) => {
                  return (
                    <div key={feed.author.username} className="article-preview">
                      <div className="article-meta">
                        <a href="/profile/eric-simons">
                          <img src={feed.author.image} />
                        </a>
                        <div className="info">
                          <a href="/profile/eric-simons" className="author">
                            Eric Simons
                          </a>
                          <span className="date">January 20th</span>
                        </div>
                        <button className="btn btn-outline-primary btn-sm pull-xs-right">
                          <i className="ion-heart"></i> {feed.favoritesCount}
                        </button>
                      </div>
                      <a
                        href={`/article/${feed.slug}`}
                        className="preview-link"
                      >
                        <h1>{feed.slug}</h1>
                        <p>{feed.description}</p>
                        <span>Read more...</span>
                        <ul className="tag-list">
                          {feed.tagList.map((tag) => (
                            <li
                              key={tag}
                              className="tag-default tag-pill tag-outline"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </a>
                    </div>
                  );
                })
              ) : (
                <div>피드 없음</div>
              )}

              <ul className="pagination">
                <li className="page-item active">
                  <a className="page-link" href="">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">
                    2
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>

                <div className="tag-list">
                  <a href="" className="tag-pill tag-default">
                    programming
                  </a>
                  <a href="" className="tag-pill tag-default">
                    javascript
                  </a>
                  <a href="" className="tag-pill tag-default">
                    emberjs
                  </a>
                  <a href="" className="tag-pill tag-default">
                    angularjs
                  </a>
                  <a href="" className="tag-pill tag-default">
                    react
                  </a>
                  <a href="" className="tag-pill tag-default">
                    mean
                  </a>
                  <a href="" className="tag-pill tag-default">
                    node
                  </a>
                  <a href="" className="tag-pill tag-default">
                    rails
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ProtecTedRoute(Home);
