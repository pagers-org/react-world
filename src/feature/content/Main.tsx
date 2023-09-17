import { useState } from "react";

import ArticleList from "../article/ArticleList";
import type { Articles } from "@/types/article";
import Pagination from "@/components/pagination/Pagination";
import { CONTENT_LIMIT, PAGE_OFFSET } from "@/constants/pagination";
import useArticles from "@/hooks/useArticles";
import type { Tags } from "@/types/tags";
import Tab from "@/components/tab/Tab";
import { DEFAULT_TAGS } from "@/constants/tag";

interface Props {
  data: Articles;
  tagsData: Tags;
}

const Main = ({ data, tagsData }: Props) => {
  const [page, setPage] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const tagsArray = tagsData.tags.map(v => ({ text: v, id: v }));
  const tabArr = [...DEFAULT_TAGS, ...tagsArray];

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setPage(0);
  };

  const handlePageChange = (page: number) => {
    setPage(page);
    window.scrollTo({ top: 0, left: 0 });
  };

  const currentTag = tabArr.find((_, i) => i === activeTab)?.id || "";

  const { articles, isLoading } = useArticles({ page, data, tag: currentTag });
  const totalPage = Math.ceil(articles.articlesCount / CONTENT_LIMIT);

  return (
    <>
      <Tab tabArr={tabArr} defaultTab={activeTab} callbacks={handleTabClick}></Tab>
      <ArticleList data={articles} isLoading={isLoading} />
      <Pagination offset={PAGE_OFFSET} totalPage={totalPage} page={page} setPage={handlePageChange} />
    </>
  );
};

export default Main;
