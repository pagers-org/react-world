'use client';
import TagList from '../tags/TagList';
import { sideBar, sideBarText } from '@/styles/layout.css';
import { sidePadding } from '@/styles/common.css';
import useCurrentTab from '@/stores/useCurrentTab';
import { useQuery } from '@tanstack/react-query';
import { getTags } from '@/services/tags';

const SideBar = () => {
  const { data: tags } = useQuery({
    queryKey: ['tags'],
    queryFn: getTags,
    select: res => res.tags,
  });

  const { setTab } = useCurrentTab();

  const handleTagClick = (tag: string) => {
    setTab(tag);
  };

  return (
    <div className={sidePadding}>
      <article className={sideBar}>
        <p className={sideBarText}>Popular Tags</p>
        <TagList tags={tags} onClick={handleTagClick} />
      </article>
    </div>
  );
};

export default SideBar;
