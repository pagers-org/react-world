import ArticleCard from "@/components/ArticleCard";
import HomeBanner from "@/components/HomeBanner";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <section className="p-10">
        <ul className="flex">
          <li className="border-b-2 border-b-primary p-2 text-primary">Global Feed</li>
        </ul>
        <ul>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </ul>
      </section>
    </main>
  );
}
