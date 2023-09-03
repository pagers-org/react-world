import { tagList } from '@/styles/layout.css';
import Link from 'next/link';
import React from 'react';

const languages = ['programming', 'javascript', 'emberjs', 'angularjs', 'react', 'mean', 'node', 'rails'];

const TagList = () => {
  return (
    <div className={tagList}>
      {languages?.map((language, index) => (
        <Link key={index} href="" className="tag-pill tag-default">
          {language}
        </Link>
      ))}
    </div>
  );
};

export default TagList;
