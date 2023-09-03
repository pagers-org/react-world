import React from 'react';
import TagList from '../tags/TagList';
import { sideBar } from '@/styles/layout.css';

const SideBar = () => {
  return (
    <article className={sideBar}>
      <p>Popular Tags</p>
      <TagList />
    </article>
  );
};

export default SideBar;
