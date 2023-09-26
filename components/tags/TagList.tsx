'use client';

import { tagFill, tagItem, tagList } from '@/styles/layout.css';

type Props = {
  tags: string[];
};
const TagList = ({ tags }: Props) => {
  return (
    <ul className={tagList}>
      {tags?.map((tag, index) => (
        <li
          key={index}
          className={`${tagItem} ${tagFill}`}
          // onClick={() => (handleTagClick ? handleTagClick(tag) : console.log('없음'))}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
