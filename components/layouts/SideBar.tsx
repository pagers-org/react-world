import React from 'react';
import TagList from '../tags/TagList';
import { sideBar, sideBarText } from '@/styles/layout.css';
import { sidePadding } from '@/styles/common.css';
import { http } from '@/utils/http';

const SideBar = async () => {
  const { tags } = await http.get('/tags');
  return (
    <div className={sidePadding}>
      <article className={sideBar}>
        <p className={sideBarText}>Popular Tags</p>
        <TagList tags={tags} />
      </article>
    </div>
  );
};

export default SideBar;
