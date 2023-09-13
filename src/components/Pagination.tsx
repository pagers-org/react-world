import React, { MouseEvent } from 'react';
import * as styles from './Pagination.css';

type Props = {
  articlesCount: number;
  handlePagination: (e: MouseEvent<HTMLButtonElement>) => any;
  selectedPage: string;
};

export default function Pagination({
  articlesCount,
  handlePagination,
  selectedPage,
}: Props) {
  const renderButtons = () => {
    const page = Math.ceil(articlesCount / 20);
    return Array.from({ length: page }, (_, i) => i + 1).map((pageIndex) => (
      <button
        className={
          pageIndex.toString() === selectedPage
            ? styles.selected
            : styles.noSelected
        }
        key={pageIndex}
        name={pageIndex.toString()}
        onClick={(e) => handlePagination(e)}
      >
        {pageIndex}
      </button>
    ));
  };

  return (
    <div className={styles.buttonWrapper}>
      <div className={styles.buttons}>{renderButtons()}</div>
    </div>
  );
}
