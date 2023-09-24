import classNames from 'classnames';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { getSearchParams } from '@/utils/search-params';

interface Props {
  totalCounts: number;
  page: number;
  perPage: number;
}

const Pagination = ({ totalCounts, page, perPage }: Props) => {
  const searchParams = useSearchParams();

  const currentSearchQueries = getSearchParams(searchParams);

  const totalPage = Math.ceil(totalCounts / perPage);

  return (
    <ul className="pagination">
      {Array(totalPage)
        .fill(null)
        .map((_, idx) => (
          <li
            key={`page--${idx}`}
            className={`page-item ${classNames({
              active: page === idx + 1,
            })}`}
          >
            <Link
              className="page-link"
              href={{
                query: {
                  ...currentSearchQueries,
                  page: (idx + 1).toString(),
                },
              }}
            >
              {idx + 1}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Pagination;
