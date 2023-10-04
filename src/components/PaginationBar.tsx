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

  const PaginationButtons = () => {
    return [...Array(Math.ceil(count / 10) + 1)].map((_, index) => (
      <PageBtn key={index + 1} onClick={() => handlePageClick(index)} isActive={index === currentPage - 1}>
        {index + 1}
      </PageBtn>
    ));
  };

  return (
    <div>
      <div className="[&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md mt-5">{PaginationButtons()}</div>
    </div>
  );
};

export default PaginationBar;
