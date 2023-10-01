import { Dispatch, SetStateAction } from 'react';

import { cn } from '@/utils/style';

import { PaginationStyle } from './style';

interface PaginationProps {
  totalPage: number;
  limit: number;
  offset?: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({
  totalPage,
  currentPage,
  offset = 10,
  setCurrentPage,
}: PaginationProps) => {
  if (!totalPage) return;
  return (
    <ul className="pagination">
      {totalPage &&
        Array.from({ length: Math.ceil(totalPage / offset) }).map(
          (_, index) => {
            const syncWithCurrentPageIndex = index + 1;
            return (
              <li
                key={syncWithCurrentPageIndex}
                onClick={() => setCurrentPage(syncWithCurrentPageIndex)}
                className={cn(
                  PaginationStyle({
                    isActive: syncWithCurrentPageIndex === currentPage,
                  }),
                )}
              >
                <p className="page-link">{syncWithCurrentPageIndex}</p>
              </li>
            );
          },
        )}
    </ul>
  );
};

export default Pagination;
