import HomeBanner from "@/components/composables/HomeBanner/HomeBanner";
import ArticleList from "@/components/Articles/ArticleList";
import { getArticles } from "@/services/getArticles";
import { getPopularTagLists } from "@/services/getPopularTagLists";

export default async function MainPage() {
  const allArticles = await getArticles();
  const articles = allArticles.articles;
  const initialPageCount = Math.ceil(allArticles.articlesCount / 9);
  const tagLists = await getPopularTagLists();

  return (
    <>
      <HomeBanner />
      <ArticleList
        articles={articles}
        initialPageCount={initialPageCount}
        tagLists={tagLists}
      />
    </>
  );
}
