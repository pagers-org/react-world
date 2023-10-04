'use client';
import { tagList } from '@/styles/layout.css';
import Tag from './Tag';

type Props = {
  tags: string[];
  onClick: (tag: string) => void;
};
const TagList = ({ tags, onClick }: Props) => {
  return <ul className={tagList}>{tags?.map((tag, index) => <Tag key={index} tag={tag} onTagClick={onClick} />)}</ul>;
};

export default TagList;
