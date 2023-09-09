import { useState } from "react";

import ArticleList from "../article/ArticleList";
import type { Articles } from "@/types/article";
import Pagination from "@/components/pagination/Pagination";
import { CONTENT_LIMIT, PAGE_OFFSET } from "@/constants/pagination";
import useArticles from "@/hooks/useArticles";

interface Props {
  data: Articles;
}

const Main = ({ data }: Props) => {
  const [page, setPage] = useState(0);
  const { articles, isLoading } = useArticles({ page, data });

  const totalPage = Math.ceil(articles.articlesCount / CONTENT_LIMIT);

  return (
    <>
      <ArticleList data={articles} isLoading={isLoading} />
      <Pagination offset={PAGE_OFFSET} totalPage={totalPage} page={page} setPage={setPage} />
    </>
  );
};

export default Main;
