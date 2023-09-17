import { FeedItem } from 'components/home/feed';
import { Pagination } from 'components/ui';
import { ARTICLE_PAGE_LIMIT } from 'constants/article';
import { articleApi } from 'services';

type Props = {
  searchParams: Record<string, string>;
};
const GlobalPage = async ({ searchParams }: Props) => {
  const page = Number(searchParams.page ?? 1);

  const { articles, articlesCount } = await articleApi.getArticles({
    limit: ARTICLE_PAGE_LIMIT,
    offset: (page - 1) * ARTICLE_PAGE_LIMIT,
  });

  return (
    <>
      <ul className="p-0">
        {articles.map((feed) => {
          return <FeedItem feed={feed} key={feed.slug} />;
        })}
      </ul>
      <Pagination total={articlesCount / ARTICLE_PAGE_LIMIT} current={page} />
    </>
  );
};

export default GlobalPage;
