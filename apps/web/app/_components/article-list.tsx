"use client";

import { usePathname } from "next/navigation";
import { useGetArticles } from "../(articles)/_hooks/use-get-articles";
import { DEFAULT_ARTICLES_LIMIT } from "../(articles)/_constants";
import Pagination from "./pagination";

export default function ArticleList(): JSX.Element {
  const pathname = usePathname();
  const currentPage = Number(pathname.split("/").filter(value => value !== "")[0]);

  const { data } = useGetArticles({
    offset: currentPage - 1,
    limit: DEFAULT_ARTICLES_LIMIT,
  });

  return (
    <>
      {data?.articles.map(({ slug, author, title, description, favoritesCount, updatedAt, tagList }) => {
        const { image, username } = author;

        return (
          <div className="article-preview" key={slug}>
            <div className="article-meta">
              <a href="/profile">
                <img alt="" src={image} />
              </a>
              <div className="info">
                <a className="author" href="/profile">
                  {username}
                </a>
                <span className="date">{updatedAt}</span>
              </div>
              <button className="btn btn-outline-primary btn-sm pull-xs-right" type="button">
                <i className="ion-heart" /> {favoritesCount}
              </button>
            </div>
            <a className="preview-link" href="/article">
              <h1>{title}</h1>
              <p>{description}</p>
              <span>Read more...</span>

              <ul className="tag-list">
                {tagList.map(tag => {
                  return (
                    <li className="tag-default tag-pill tag-outline" key={tag}>
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </a>
          </div>
        );
      })}

      {data ? <Pagination articlesCount={data.articlesCount} currentPage={currentPage} /> : null}
    </>
  );
}
