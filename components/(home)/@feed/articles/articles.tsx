import type { Article } from "models/article";

import { ArticleItem } from "../article-item";

type Props = {
  articles: Article[];
};

export const Articles = ({ articles }: Props) => {
  return (
    <div className="flex flex-col">
      {articles.map((article) => (
        <ArticleItem key={article.slug} article={article} />
      ))}
    </div>
  );
};
