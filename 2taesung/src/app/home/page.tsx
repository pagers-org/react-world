import Banner from '@/components/Banner';
import MainSection from '@/components/MainSection';

const PAGE_PER_NUM = 5;

async function getData({ page }: { page: number }) {
  const res = await fetch('https://api.realworld.io/api/articles');
  const { articles } = await res.json();
  const pageList = Array.from(
    { length: articles.length / PAGE_PER_NUM },
    (_, i) => i + 1,
  );
  const articleList = articles.splice(
    (page - 1) * PAGE_PER_NUM,
    page * PAGE_PER_NUM,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return { articleList, pageList };
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const { articleList, pageList } = await getData({ page });

  return (
    <main className="h-full w-full">
      <div className="home-page">
        <Banner />
        <MainSection articleList={articleList} pageList={pageList} />
      </div>
    </main>
  );
}
