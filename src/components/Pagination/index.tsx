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
    <div>
      {Array.from({ length: totalPage }).map((_, index) => {
        return (
          <button
            className={classNames(styles.paginationButton, {
              [styles.activePaginationButton]: currentPage === index + 1,
            })}
            onClick={() => onClickPage(index + 1)}
            key={index}
            type="button"
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}
