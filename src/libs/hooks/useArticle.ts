import { useState } from "react";
import useFetch from "./useFetch";

type UserArticlesType = {
  initialArticles: any[];
  initialPageCount: number;
};

export const useArticle = ({
  initialArticles,
  initialPageCount,
}: UserArticlesType) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(initialPageCount);
  const [currentArticles, setCurrenArticles] = useState(initialArticles);
  const [selectedSection, setSelectedSection] = useState<string>("Global Feed");
  const [tag, setTag] = useState<string | undefined>();
  const { isLoading, error, sendRequest, clearError, setError } = useFetch();

  const fetchArticles = async (offset: number, tag?: string) => {
    const getArticlesEndPoint = tag
      ? `${process.env.NEXT_PUBLIC_GET_ARTICLES_END_POINT}?tag=${tag}&offset=${offset}&limit=9`
      : `${process.env.NEXT_PUBLIC_GET_ARTICLES_END_POINT}?offset=${offset}&limit=9`;

    if (!getArticlesEndPoint) {
      throw new Error("엔드포인트를 확인해주세요! ");
    }

    try {
      const res = await sendRequest(getArticlesEndPoint, "GET");

      const { articles, articlesCount } = res;
      const pageCount = Math.ceil(articlesCount / 9);

      setCurrenArticles(articles);
      setPageCount(pageCount);
      setCurrentPage(1);
    } catch (err) {
      console.log(err);
    }
  };

  // 섹션 선택 함수
  const selectSectionHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
    const clickedSection = e.currentTarget.innerText;
    setSelectedSection(clickedSection);
    setTag(undefined);
    let endPoint;
    const getArticlesEndPoint = `${process.env.NEXT_PUBLIC_GET_ARTICLES_END_POINT}?offset=0&limit=9`;

    if (!getArticlesEndPoint) {
      throw new Error("엔드포인트를 확인해주세요! ");
    }

    if (clickedSection === "Global Feed") {
      endPoint = getArticlesEndPoint;
    }

    if (!endPoint) {
      throw new Error("경로를 확인해주세요!");
    }

    fetchArticles(0, undefined);
  };

  // 페이지 변경 함수
  const handlePageChange = (pageNumber: number, offset: number) => {
    setCurrentPage(pageNumber);
    fetchArticles(offset, tag);
  };

  // 태그 선택 함수
  const selectTagHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const tag = e.currentTarget.innerText;
    setTag(tag);
    setSelectedSection("");
    fetchArticles(0, tag);
  };

  return {
    currentPage,
    pageCount,
    currentArticles,
    selectedSection,
    isLoading,
    tag,
    fetchArticles,
    selectSectionHandler,
    handlePageChange,
    selectTagHandler,
  };
};
