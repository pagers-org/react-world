'use client';
import { tagFill, tagItem, tagList } from '@/styles/layout.css';
import Link from 'next/link';
import React from 'react';

type Props = {
  tags: string[];
};
const TagList = ({ tags }: Props) => {
  return (
    <ul className={tagList}>
      {tags.length > 0 &&
        tags?.map((tag, index) => (
          <li key={index}>
            <Link href="" className={`${tagItem} ${tagFill}`}>
              {tag}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default TagList;
