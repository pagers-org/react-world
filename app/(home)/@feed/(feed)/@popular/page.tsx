import { Feed } from "components/(home)/@feed/feed";
import { ARTICLES_PER_PAGE, INITIAL_PAGE } from "constants/articles";
import { articleRepository } from "repositories/article";

type Props = {
  searchParams: Record<string, string>;
};

export const runtime = "edge";

const PopularPage = async ({ searchParams: { page, tag } }: Props) => {
  const currentPage = Number(page) || INITIAL_PAGE;

  const { articles, articlesCount } = await articleRepository.findAll({
    offset: (currentPage - 1) * ARTICLES_PER_PAGE,
    limit: ARTICLES_PER_PAGE,
    tag,
  });

  return <Feed articles={articles} total={articlesCount} />;
};

export default PopularPage;
