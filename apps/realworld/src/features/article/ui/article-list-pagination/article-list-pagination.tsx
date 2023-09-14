'use client';
import { generatePageList, getItemActivation } from '@/entities/article/api/page';
import { getItemIndex } from '@/shared/utils/array';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ArticleListPaginationProps {
  lastPage: number;
  currentPage: number;
}

const ArticleListPagination = ({ currentPage = 1, lastPage }: ArticleListPaginationProps) => {
  const { push } = useRouter();
  const handleChangePage = (page: number) => {
    push(`/?page=${page}`);
  };
  const pageList = generatePageList(lastPage);

  return (
    <ul className="flex">
      {pageList.map((page, index, array) => {
        const itemIndex = getItemIndex(index, array);
        const itemActivation = getItemActivation(page, currentPage);

        return (
          <li
            onClick={() => handleChangePage(page)}
            key={index}
            className={`flex items-center justify-center border w-42 h-42 cursor-pointer ${style.index[itemIndex]} ${style.activation[itemActivation]}`}
          >
            {page}
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleListPagination;

const style = {
  index: {
    firstItem: 'rounded-l-[0.25rem]',
    otherItem: 'border-l-0 border-b-1',
    lastItem: 'border-l-0 rounded-r-[0.25rem]',
  },
  activation: {
    active: 'text-white bg-green600 underline border-green600 ',
    inactive: 'border-gray1200 text-green600 hover:underline hover:bg-black/10',
  },
};
