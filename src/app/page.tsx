import HomeBanner from "@/components/composables/HomeBanner/HomeBanner";
import ArticleList from "@/components/Articles/ArticleList";
import { getArticles } from "@/services/getArticles";

export default async function MainPage() {
  const allArticles = await getArticles();
  let articles = allArticles.articles;
  let pageCount = Math.ceil(allArticles.articlesCount / 9);

  return (
    <>
      <HomeBanner />
      <ArticleList articles={articles} pageCount={pageCount} />
    </>
  );
}
