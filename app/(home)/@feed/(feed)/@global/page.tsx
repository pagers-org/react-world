import { Feed } from "components/(home)/@feed/feed";
import { ARTICLES_PER_PAGE, INITIAL_PAGE } from "constants/articles";
import { articleRepository } from "repositories/article";

type Props = {
  searchParams: Record<string, string>;
};

export const runtime = "edge";

const GlobalPage = async ({ searchParams }: Props) => {
  const page = Number(searchParams.page) || INITIAL_PAGE;

  const { articles, articlesCount } = await articleRepository.findAll({
    offset: (page - 1) * ARTICLES_PER_PAGE,
    limit: ARTICLES_PER_PAGE,
  });

  return <Feed articles={articles} total={articlesCount} />;
};

export default GlobalPage;
