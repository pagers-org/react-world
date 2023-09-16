import * as styles from './Pagination.css';

interface Props {
  totalPage: number;
  selectedPage: number;
  handlePagination: (page: number) => void;
}

export default function Pagination({
  totalPage,
  selectedPage,
  handlePagination,
}: Props) {
  const renderButtons = () => {
    return Array.from({ length: totalPage }, (_, i) => i + 1).map(
      (pageIndex) => (
        <button
          className={
            selectedPage === pageIndex
              ? styles.activeButton
              : styles.inActiveButton
          }
          key={pageIndex}
          onClick={() => handlePagination(pageIndex)}
        >
          {pageIndex}
        </button>
      ),
    );
  };

  return (
    <div className={styles.buttonLayer}>
      <div className={styles.buttons}>{renderButtons()}</div>
    </div>
  );
}
