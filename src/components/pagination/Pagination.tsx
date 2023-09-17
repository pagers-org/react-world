import { icon, paginationContainer, pageButton, pageButtonText } from "./Pagination.css";
import SvgIcon from "../SvgIcon";
import PaginationIcon from "@/assets/icons/pagination.svg";

interface Props {
  totalPage: number;
  page: number;
  setPage: (page: number) => void;
  offset: number;
}

const Pagination = ({ totalPage, page, setPage, offset = 5 }: Props) => {
  const pageList = new Array(totalPage).fill(0).map((_, idx) => idx + 1);
  const firstNum = page - (page % offset);
  const lastNum = page - (page % offset) + (offset - 1);

  const handleClick = (page: number) => () => {
    setPage(page);
  };

  return (
    <div className={paginationContainer}>
      <button disabled={page === 0} id="first-page-button" className={pageButton} onClick={() => handleClick(0)}>
        <SvgIcon src={PaginationIcon.src} className={icon} id="chevron-double-left" />
      </button>
      <button id="prev-button" className={pageButton} disabled={page - 1 < 0} onClick={() => handleClick(page - 1)}>
        <SvgIcon src={PaginationIcon.src} className={icon} id="chevron-left" />
      </button>
      {pageList.slice(firstNum, lastNum + 1).map((num, idx) => (
        <button
          disabled={page === idx}
          id="pagination"
          onClick={handleClick(idx)}
          className={`${pageButton} ${page + 1 === num ? "active" : ""}`}
          key={num}
        >
          <span className={pageButtonText}>{num}</span>
        </button>
      ))}
      <button id="next-button" className={pageButton} disabled={page === totalPage - 1} onClick={handleClick(page + 1)}>
        <SvgIcon src={PaginationIcon.src} className={icon} id="chevron-right" />
      </button>
      <button
        disabled={page === totalPage - 1}
        id="last-page-button"
        className={pageButton}
        onClick={handleClick(totalPage - 1)}
      >
        <SvgIcon src={PaginationIcon.src} className={icon} id="chevron-double-right" />
      </button>
    </div>
  );
};

export default Pagination;
