import cn from 'classnames';

import styles from './pagination.module.scss';
import { TReturnComponent } from '@/types/common.type';
import { usePagination } from './hooks/use-pagination';

export interface IPaginationProps {
    totalCnt: number;
    currentPage: number;
    itemPerPage?: number;
    showPageCnt?: number;

    onClick?: (page: number) => void;
}

function Pagination({ onClick, ...rest }: IPaginationProps): TReturnComponent {
    const { first, last, prev, next, pageArr } = usePagination(rest);

    return (
        <ul className={styles.wrap}>
            <li
                className={cn(styles.first, first || styles.disabled)}
                role="tab"
                tabIndex={0}
                onClick={() => first && onClick && onClick(first)}
                onKeyDown={() => null}
            >
                {'<<'}
            </li>
            <li
                className={cn(styles.prev, prev || styles.disabled)}
                role="tab"
                tabIndex={0}
                onClick={() => prev && onClick && onClick(prev)}
                onKeyDown={() => null}
            >
                {'<'}
            </li>
            {pageArr.map(page => (
                <li
                    key={page}
                    className={cn(
                        Number(rest.currentPage) === page && styles.active,
                    )}
                    role="tab"
                    tabIndex={0}
                    onClick={() => page && onClick && onClick(page)}
                    onKeyDown={() => null}
                >
                    {page}
                </li>
            ))}
            <li
                className={cn(styles.next, next || styles.disabled)}
                role="tab"
                tabIndex={0}
                onClick={() => next && onClick && onClick(next)}
                onKeyDown={() => null}
            >
                {'>'}
            </li>
            <li
                className={cn(styles.last, last || styles.disabled)}
                role="tab"
                tabIndex={0}
                onClick={() => last && onClick && onClick(last)}
                onKeyDown={() => null}
            >
                {'>>'}
            </li>
        </ul>
    );
}

export default Pagination;
