import { page_button, active } from "@/styles/pagination.css";
import { myStyle } from "@/styles/container.css";

type PageButtonType = {
  page: number;
  currentPage: number;
  currentPageHandler: (e: React.MouseEvent) => void;
};

export default function PageButton({
  page,
  currentPage,
  currentPageHandler,
}: PageButtonType) {
  return (
    <>
      <button
        onClick={currentPageHandler}
        className={`${page_button} ${myStyle} ${
          currentPage === page ? active : ""
        }`}
      >
        {page}
      </button>
    </>
  );
}
