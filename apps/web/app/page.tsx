import { dehydrate } from "@tanstack/query-core";
import getQueryClient from "../lib/get-query-clinet";
import Hydrate from "../lib/query-hydrate";
import { DEFAULT_ARTICLES_LIMIT, DEFAULT_ARTICLES_OFFSET } from "./(articles)/_constants";
import { queryKeys } from "./(articles)/_constants/querykeys";
import ArticleList from "./_components/article-list";
import FeedToggle from "./_components/feed-toggle";
import HomeBanner from "./_components/home-banner";
import { getArticles } from "./(articles)/_api/get-articles";
import Pagination from "./_components/pagination";
import type { ArticlesQueryParamsType } from "./(articles)/_types/articles.types";

export default async function Page(): Promise<JSX.Element> {
  const queryClient = getQueryClient();

  const articlesQueryParams: ArticlesQueryParamsType = {
    offset: DEFAULT_ARTICLES_OFFSET,
    limit: DEFAULT_ARTICLES_LIMIT,
  };

  await queryClient.prefetchQuery(queryKeys.articles(articlesQueryParams), () => getArticles(articlesQueryParams));

  const dehydrateState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydrateState}>
      <div className="home-page">
        <HomeBanner />
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <FeedToggle />
              <ArticleList />
              <Pagination />
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
    </Hydrate>
  );
}
