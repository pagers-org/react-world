'use client';
import { tagFill, tagItem } from '@/styles/layout.css';

type Props = {
  tag: string;
  onTagClick?: (tag: string) => void;
};

const Tag = ({ tag, onTagClick }: Props) => {
  return (
    <li className={`${tagItem} ${tagFill}`} onClick={onTagClick ? () => onTagClick(tag) : () => console.log('없음')}>
      {tag}
    </li>
  );
};

export default Tag;
