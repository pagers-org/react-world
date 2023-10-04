"use client";
import React from "react";
import PopularTags from "@/components/PopularTags";
import Tabs from "@/components/Tabs";
import PaginationBar from "@/components/PaginationBar";
import ArticleCard from "@/components/ArticleCard";
import { contentContainer } from "@/app/page.css";
import { useQuery } from "@tanstack/react-query";
import { getArticles } from "@/services/articles";
import { useArticlesParamsStore } from "@/stores/useStore";

const Articles = () => {
  const { articlesParams } = useArticlesParamsStore();

  const { isLoading, data: articleResponse } = useQuery(
    ["/api/articles", articlesParams],
    () => getArticles(articlesParams),
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <div>
      <section className={contentContainer}>
        <div>
          {isLoading && <div>Loading...</div>}
          {articleResponse && (
            <div>
              <Tabs tabs={["Global Feed", articlesParams.tag]} />
              <ul>
                {articleResponse.articles.map((article) => (
                  <ArticleCard article={article} />
                ))}
              </ul>
              <PaginationBar count={articleResponse.articlesCount} />
            </div>
          )}
        </div>
        <PopularTags />
      </section>
    </div>
  );
};

export default Articles;
