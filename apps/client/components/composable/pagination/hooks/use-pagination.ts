import _range from 'lodash-es/range';
import { useState, useEffect } from 'react';
import { IPaginationProps } from '..';

interface IUsePagination {
    first: number | undefined;
    prev: number | undefined;
    next: number | undefined;
    last: number | undefined;
    totalPage: number;
    pageArr: number[];
}

export function usePagination({
    totalCnt,
    currentPage,
    itemPerPage = 10,
    showPageCnt = 5,
}: IPaginationProps): IUsePagination {
    const [pageData, setPageData] = useState<IUsePagination>({
        first: undefined,
        prev: undefined,
        next: undefined,
        last: undefined,
        totalPage: 0,
        pageArr: [],
    });

    useEffect(() => {
        let first, prev, next, last;
        const totalPage =
            Math.floor(totalCnt / Number(itemPerPage)) +
            (totalCnt % Number(itemPerPage) === 0 ? 0 : 1);
        const start =
            Math.floor((Number(currentPage) - 1) / Number(showPageCnt)) *
                Number(showPageCnt) +
            1;
        const end =
            start + Number(showPageCnt) > totalPage
                ? totalPage + 1
                : start + Number(showPageCnt);

        if (!(Number(currentPage) <= Number(showPageCnt))) {
            first = 1;
            prev = start - itemPerPage;
        }

        if (
            !(
                totalPage <= Number(showPageCnt) ||
                Math.floor((Number(currentPage) - 1) / Number(showPageCnt)) *
                    Number(showPageCnt) +
                    Number(showPageCnt) +
                    1 >
                    totalPage
            )
        ) {
            next = start + Number(itemPerPage);
            last =
                Math.floor((totalPage - 1) / Number(showPageCnt)) *
                    Number(showPageCnt) +
                1;
        }

        setPageData({
            first,
            last,
            prev,
            next,
            totalPage,
            pageArr: _range(start, end),
        });
    }, [totalCnt, currentPage, itemPerPage, showPageCnt]);

    return pageData;
}
