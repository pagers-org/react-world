import { Author } from "components/article/author";
import { Content } from "components/article/content";
import { Summary } from "components/article/summary";
import { articleRepository } from "repositories/article";

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

const ArticlePage = async ({ params: { slug } }: Props) => {
  const { article } = await articleRepository.findOne(slug);

  return (
    <>
      <Summary article={article} />
      <Content content={article.body} />
      <Author article={article} />
    </>
  );
};

export default ArticlePage;
