import Banner from '@/components/Banner';
import MainSection from '@/components/MainSection';
import { roundUpDivision } from '@/util';

const PER_NUM_PAGE = 5;

async function getData({ page }: { page: number }) {
  const res = await fetch(
    `https://api.realworld.io/api/articles?offset=${
      (page - 1) * 5
    }&limit=${PER_NUM_PAGE}`,
  );
  const { articles, articlesCount } = await res.json();
  const pageNums = Array.from(
    { length: roundUpDivision(articlesCount, PER_NUM_PAGE) },
    (_, i) => i + 1,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return { articles, pageNums };
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const { articles, pageNums } = await getData({ page });

  return (
    <main className="h-full w-full">
      <div className="home-page">
        <Banner />
        <MainSection articleList={articles} pageNums={pageNums} />
      </div>
    </main>
  );
}
