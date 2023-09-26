'use client';
import { tagList } from '@/styles/layout.css';
import Tag from './Tag';
import { useArticlesByTag } from '@/hooks/useArticles';
import useCurrentTag from '@/stores/useCurrentTag';

type Props = {
  tags: string[];
};
const TagList = ({ tags }: Props) => {
  const { tag, setTag } = useCurrentTag();
  const { data } = useArticlesByTag(tag);

  const handleTagClick = (tag: string) => {
    setTag(tag);
  };
  return (
    <ul className={tagList}>{tags?.map((tag, index) => <Tag key={index} tag={tag} onTagClick={handleTagClick} />)}</ul>
  );
};

export default TagList;
