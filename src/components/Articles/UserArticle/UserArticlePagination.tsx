import PageButton from "../Pagination/PageButton";
import { page_container } from "@/styles/pagination.css";

type UserArticlePaginationType = {
  pageCount: number;
  currentPage: number;
  currentPageHandler: (e: React.MouseEvent) => void;
};

export default function UserArticlePaginiation({
  currentPage,
  pageCount,
  currentPageHandler,
}: UserArticlePaginationType) {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <>
      <div className={page_container}>
        {pages.map((page, key) => {
          return (
            <PageButton
              key={key}
              page={page}
              currentPage={currentPage}
              currentPageHandler={currentPageHandler}
            />
          );
        })}
      </div>
    </>
  );
}
