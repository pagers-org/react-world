"use client";

import ArticleItem from "./ArticleItem";
import {
  home_articles_container,
  home_articles_ul,
  home_ariticles_section,
  section,
  selected,
} from "@/styles/home_articles.css";
import LoadingSpinner from "../composables/LoadingSpinner.tsx/LoadingSpinner";
import Pagination from "./Pagination/ Pagination";
import PopularTags from "../PopularTags/PopularTags";
import { useArticle } from "@/libs/hooks/useArticle";

type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: string | null;
    image: string;
    following: boolean;
  };
};

type ArticleListProps = {
  articles: Article[];
  initialPageCount: number;
  tagLists: string[];
};

export default function ArticleList({
  articles,
  initialPageCount,
  tagLists,
}: ArticleListProps) {
  const {
    currentPage,
    pageCount,
    currentArticles,
    selectedSection,
    isLoading,
    tag,
    selectSectionHandler,
    handlePageChange,
    selectTagHandler,
  } = useArticle({
    initialArticles: articles,
    initialPageCount: initialPageCount,
  });

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className={home_articles_container}>
          <div className={home_ariticles_section}>
            {/* <div className={section}>Your Feed</div> */}
            <div
              className={
                selectedSection === "Global Feed"
                  ? `${section} ${selected}`
                  : section
              }
              onClick={selectSectionHandler}
            >
              <p>Global Feed</p>
            </div>
            {tag && (
              <div className={`${section} ${selected}`}>
                <p>#{tag}</p>
              </div>
            )}
          </div>{" "}
          <PopularTags
            tagLists={tagLists}
            selectTagHandler={selectTagHandler}
          />
          <ul className={home_articles_ul}>
            {currentArticles.map((article, index) => {
              return (
                <ArticleItem
                  key={index}
                  title={article.title}
                  description={article.description}
                  tagList={article.tagList}
                  createdAt={article.createdAt}
                  favoritesCount={article.favoritesCount}
                  favorited={article.favorited}
                  userImage={article.author.image}
                  userName={article.author.username}
                  slug={article.slug}
                />
              );
            })}
          </ul>
          <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      )}
    </>
  );
}
