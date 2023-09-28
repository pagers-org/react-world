'use client';
import { tagList } from '@/styles/layout.css';
import Tag from './Tag';
import useCurrentTab from '@/stores/useCurrentTab';

type Props = {
  tags: string[];
};
const TagList = ({ tags }: Props) => {
  const { setTab } = useCurrentTab();

  const handleTagClick = (tag: string) => {
    setTab(tag);
  };
  return (
    <ul className={tagList}>{tags?.map((tag, index) => <Tag key={index} tag={tag} onTagClick={handleTagClick} />)}</ul>
  );
};

export default TagList;
