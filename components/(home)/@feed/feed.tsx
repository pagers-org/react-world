import type { Article } from "models/article";

import { Articles } from "./articles";
import { ArticlesPagination } from "./articles-pagination";

type Props = {
  articles: Article[];
  total: number;
};

export const Feed = ({ articles, total }: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <Articles articles={articles} />
      <ArticlesPagination articlesCount={total} />
    </div>
  );
};
