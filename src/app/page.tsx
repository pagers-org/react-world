"use client";
import ArticleCard from "@/components/ArticleCard";
import HomeBanner from "@/components/HomeBanner";
import { contentContainer, tabContainer } from "./page.css";
import { useQuery } from "@tanstack/react-query";
import { getArticles } from "@/services/articles";
import PopularTags from "@/components/PopularTags";
import { useState } from "react";

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string>();
  const { isLoading, data: articleResponse } = useQuery(
    ["/api/articles", selectedTag],
    () => getArticles(selectedTag ? { tag: selectedTag } : undefined),
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <main>
      <HomeBanner />
      <section className={contentContainer}>
        {isLoading && <div>Loading...</div>}
        {articleResponse && (
          <div>
            <ul className="flex">
              <li className={tabContainer}>Global Feed</li>
            </ul>
            <ul>
              {articleResponse.articles.map((article) => (
                <ArticleCard article={article} />
              ))}
            </ul>
          </div>
        )}
        <PopularTags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      </section>
    </main>
  );
}
