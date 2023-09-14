"use client";
import ArticleCard from "@/components/ArticleCard";
import HomeBanner from "@/components/HomeBanner";
import { contentContainer } from "./page.css";
import { useQuery } from "@tanstack/react-query";
import { getArticles } from "@/services/articles";
import PopularTags from "@/components/PopularTags";
import Tabs from "@/components/Tabs";
import PaginationBar from "@/components/PaginationBar";
import { useArticlesParamsStore } from "@/stores/useStore";

export default function Home() {
  const { articlesParams } = useArticlesParamsStore();

  const { isLoading, data: articleResponse } = useQuery(
    ["/api/articles", articlesParams],
    () => getArticles(articlesParams),
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <main>
      <HomeBanner />
      <section className={contentContainer}>
        <div>
          {isLoading && <div>Loading...</div>}
          {articleResponse && (
            <div>
              <Tabs tabs={[undefined, "Global Feed", articlesParams.tag]} />
              <ul>
                {articleResponse.articles.map((article) => (
                  <ArticleCard article={article} />
                ))}
              </ul>
            </div>
          )}
          {articleResponse && <PaginationBar count={articleResponse.articlesCount} />}
        </div>
        <PopularTags />
      </section>
    </main>
  );
}
