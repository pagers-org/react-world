'use client';

import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { clsx } from 'lib/utils';
import { Overwrite } from 'lib/type-utils';

type PaginationProps = {
  total: number;
  current?: number;
  onChange?: (page: number) => void;
};

type Props = Overwrite<ComponentPropsWithoutRef<'ul'>, PaginationProps>;

export const Pagination = forwardRef<HTMLUListElement, Props>(function pagination(
  { total, current = 1, onChange, ...otherProps },
  ref,
) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  const handleItemClick = (page: number) => () => {
    onChange?.(page);
  };

  return (
    <ul ref={ref} {...otherProps} className="pagination">
      {pages.map((page) => (
        <li className={clsx('page-item', { active: page === current })} key={page} onClick={handleItemClick(page)}>
          <a className="page-link" href="">
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
});
