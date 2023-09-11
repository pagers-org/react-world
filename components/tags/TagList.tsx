'use client';
import { tagFill, tagItem, tagList } from '@/styles/layout.css';

type Props = {
  tags: string[];
  onClick?: (tag: string) => void;
};
const TagList = ({ tags, onClick }: Props) => {
  return (
    <ul className={tagList}>
      {tags?.map((tag, index) => (
        <li key={index} className={`${tagItem} ${tagFill}`} onClick={() => onClick(tag)}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
