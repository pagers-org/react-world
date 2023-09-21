"use client";

import UserArticleList from "./UserArticleList";
import UserArticleCategory from "./UserArticleCategory";
import React, { useState, useEffect } from "react";
import { useSelectCategory } from "@/libs/hooks/useSelectCategory";
import useFetch from "@/libs/hooks/useFetch";
import { getUserArticles } from "@/services/getUserArticles";
import LoadingSpinner from "@/components/composables/LoadingSpinner.tsx/LoadingSpinner";
import { useDidMountEffect } from "@/libs/hooks/useDidMountEffect";
import UserArticlePagination from "./UserArticlePagination";
import { usePagination } from "@/libs/hooks/usePagination";

type Author = {
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
};

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
  author: Author;
};

type UserAritcleType = {
  articles: Article[];
  username: string;
  initialPageCount: number;
};

export default function UserArticleWrapper({
  articles,
  username,
  initialPageCount,
}: UserAritcleType) {
  const [currentArticles, setCurrentArticles] = useState<Article[]>(articles);
  const { categoryAndUrl, selectedCategory, selectCategoryHandler } =
    useSelectCategory({
      "My Articles": `https://api.realworld.io/api/articles?author=${username}`,
      "Favorited Articles": `https://api.realworld.io/api/articles?favorited=${username}`,
    });
  const { isLoading, sendRequest } = useFetch();
  const [pageCount, setPageCount] = useState<number>(initialPageCount);
  const { currentPage, currentPageHandler, offset } = usePagination(5);

  useDidMountEffect(() => {
    const refetchData = async () => {
      const { articles, articlesCount } = await sendRequest(
        categoryAndUrl[selectedCategory]
      );

      setCurrentArticles([...articles]);
      setPageCount(Math.ceil(articlesCount / 5));
    };

    refetchData();
  }, [selectedCategory]);

  useDidMountEffect(() => {
    const refetchData = async () => {
      const { articles, articlesCount } = await sendRequest(
        `https://api.realworld.io/api/articles?author=${username}&offset=${offset}&limit=5`
      );

      setCurrentArticles([...articles]);
      setPageCount(Math.ceil(articlesCount / 5));
    };

    console.log(currentPage);
    refetchData();
  }, [currentPage]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <UserArticleCategory
        categories={["My Articles", "Favorited Articles"]}
        selectedCategory={selectedCategory}
        selectCategoryHandler={selectCategoryHandler}
      />
      {currentArticles.length > 0 ? (
        <>
          <UserArticleList articles={currentArticles} />
          <UserArticlePagination
            currentPage={currentPage}
            pageCount={pageCount}
            currentPageHandler={currentPageHandler}
          />
        </>
      ) : (
        <div>데이터가 없어요!</div>
      )}
    </>
  );
}
