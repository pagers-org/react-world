import { useArticlesParamsStore } from "@/stores/useStore";
import PageBtn from "./buttons/PageBtn";

interface PaginationBarProps {
  count: number;
}

const PaginationBar: React.FC<PaginationBarProps> = ({ count }) => {
  const {
    articlesParams: { offset },
    setCurrentPage,
  } = useArticlesParamsStore();

  const currentPage = offset / 10 + 1;

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const pageBtns = [];
    for (let i = 1; i <= Math.ceil(count / 10); i++) {
      pageBtns.push(
        <PageBtn key={i} onClick={() => handlePageClick(i)} isActive={i === currentPage}>
          {i}
        </PageBtn>,
      );
    }
    return pageBtns;
  };

  return (
    <div>
      <div className="[&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md mt-5">
        {renderPaginationButtons()}
      </div>
    </div>
  );
};

export default PaginationBar;
