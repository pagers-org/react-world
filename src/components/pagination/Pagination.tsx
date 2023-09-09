import type { Dispatch, SetStateAction } from "react";

import { icon, paginationContainer, pageButton } from "./Pagination.css";
import SvgIcon from "../SvgIcon";
import PaginationIcon from "@/assets/icons/pagination.svg";

interface Props {
  totalPage: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  offset: number;
}

const Pagination = ({ totalPage, page, setPage, offset = 5 }: Props) => {
  const pageList = new Array(totalPage).fill(0).map((v, i) => i + 1);
  const firstNum = page - (page % offset);
  const lastNum = page - (page % offset) + (offset - 1);

  const handleClick = (page: number) => {
    setPage(page);
  };

  return (
    <div className={paginationContainer}>
      <button id="first-page-button" className={pageButton} onClick={() => handleClick(0)}>
        <SvgIcon src={PaginationIcon.src} className={icon} id="chevron-double-left" />
      </button>
      <button id="prev-button" className={pageButton} disabled={page === 0} onClick={() => handleClick(page - 1)}>
        <SvgIcon src={PaginationIcon.src} className={icon} id="chevron-left" />
      </button>
      {pageList.slice(firstNum, lastNum + 1).map((v, i) => (
        <button
          disabled={page === i}
          id="pagination"
          onClick={() => handleClick(i)}
          className={`${pageButton} ${page + 1 === v ? "active" : ""}`}
          key={v}
        >
          {v}
        </button>
      ))}
      <button
        id="next-button"
        className={pageButton}
        disabled={page === totalPage}
        onClick={() => handleClick(page + 1)}
      >
        <SvgIcon src={PaginationIcon.src} className={icon} id="chevron-right" />
      </button>
      <button id="last-page-button" className={pageButton} onClick={() => handleClick(totalPage - 1)}>
        <SvgIcon src={PaginationIcon.src} className={icon} id="chevron-double-right" />
      </button>
    </div>
  );
};

export default Pagination;
