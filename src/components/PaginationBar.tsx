import { useArticlesParamsStore } from "@/stores/useStore";

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
    const buttons = [];
    for (let i = 1; i <= Math.ceil(count / 10); i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          style={{
            padding: "5px 10px",
            background: i === currentPage ? "#ddd" : "white",
            border: "1px solid #ccc",
          }}
        >
          {i}
        </button>,
      );
    }
    return buttons;
  };

  return (
    <div>
      <div>Current Page: {currentPage}</div>
      <div style={{ marginTop: "10px", borderRadius: "5px", overflow: "hidden" }}>{renderPaginationButtons()}</div>
    </div>
  );
};

export default PaginationBar;
