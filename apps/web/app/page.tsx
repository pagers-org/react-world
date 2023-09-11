import { dehydrate } from "@tanstack/query-core";
import getQueryClient from "../lib/get-query-clinet";
import { http } from "../lib/http";
import Hydrate from "../lib/query-hydrate";
import { queryKeys } from "./(articles)/constants/querykeys";
import { ArticlesResponseSchema } from "./(articles)/types/articles.types";
import { DEFAULT_ARTICLES_LIMIT, DEFAULT_ARTICLES_OFFSET } from "./(articles)/constants";

export default async function Page(): Promise<JSX.Element> {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(
    queryKeys.articles({
      offset: DEFAULT_ARTICLES_OFFSET,
      limit: DEFAULT_ARTICLES_LIMIT,
    }),
    () =>
      http.get({
        url: `/articles?offset=${DEFAULT_ARTICLES_OFFSET}&limit=${DEFAULT_ARTICLES_LIMIT}`,
        schema: ArticlesResponseSchema,
      })
  );

  const dehydrateState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydrateState}>
      <div>
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
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Your Feed
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="/">
                        Global Feed
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="article-preview">
                  <div className="article-meta">
                    <a href="/profile">
                      <img alt="" src="http://i.imgur.com/Qr71crq.jpg" />
                    </a>
                    <div className="info">
                      <a className="author" href="/profile">
                        Eric Simons
                      </a>
                      <span className="date">January 20th</span>
                    </div>
                    <button className="btn btn-outline-primary btn-sm pull-xs-right" type="button">
                      <i className="ion-heart" /> 29
                    </button>
                  </div>
                  <a className="preview-link" href="/article">
                    <h1>How to build webapps that scale</h1>
                    <p>This is the description for the post.</p>
                    <span>Read more...</span>
                    <ul className="tag-list">
                      <li className="tag-default tag-pill tag-outline">realworld</li>
                      <li className="tag-default tag-pill tag-outline">implementations</li>
                    </ul>
                  </a>
                </div>
                <div className="article-preview">
                  <div className="article-meta">
                    <a href="/profile">
                      <img alt="" src="http://i.imgur.com/N4VcUeJ.jpg" />
                    </a>
                    <div className="info">
                      <a className="author" href="/profile">
                        Albert Pai
                      </a>
                      <span className="date">January 20th</span>
                    </div>
                    <button className="btn btn-outline-primary btn-sm pull-xs-right" type="button">
                      <i className="ion-heart" /> 32
                    </button>
                  </div>
                  <a className="preview-link" href="/article">
                    <h1>The song you won&apos;t ever stop singing. No matter how hard you try.</h1>
                    <p>This is the description for the post.</p>
                    <span>Read more...</span>
                    <ul className="tag-list">
                      <li className="tag-default tag-pill tag-outline">realworld</li>
                      <li className="tag-default tag-pill tag-outline">implementations</li>
                    </ul>
                  </a>
                </div>
                <ul className="pagination">
                  <li className="page-item active">
                    <a className="page-link" href="/">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/">
                      2
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <div className="sidebar">
                  <p>Popular Tags</p>
                  <div className="tag-list">
                    <a className="tag-pill tag-default" href="/">
                      programming
                    </a>
                    <a className="tag-pill tag-default" href="/">
                      javascript
                    </a>
                    <a className="tag-pill tag-default" href="/">
                      emberjs
                    </a>
                    <a className="tag-pill tag-default" href="/">
                      angularjs
                    </a>
                    <a className="tag-pill tag-default" href="/">
                      react
                    </a>
                    <a className="tag-pill tag-default" href="/">
                      mean
                    </a>
                    <a className="tag-pill tag-default" href="/">
                      node
                    </a>
                    <a className="tag-pill tag-default" href="/">
                      rails
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Hydrate>
  );
}
