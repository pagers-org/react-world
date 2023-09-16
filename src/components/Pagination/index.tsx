import classNames from 'classnames';

import * as styles from './index.css';

interface Props {
  currentPage: number;
  totalPage: Props['currentPage'];
  onClickPage: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPage,
  onClickPage,
}: Props) {
  return (
    <div data-testid="pagination-container">
      {Array.from({ length: totalPage }).map((_, index) => {
        const page = index + 1;

        return (
          <button
            className={classNames(styles.paginationButton, {
              [styles.activePaginationButton]: currentPage === page,
            })}
            onClick={() => onClickPage(page)}
            key={index}
            type="button"
            data-testid="pagination-button"
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
