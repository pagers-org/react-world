'use client';

import ArticlePreview from './ArticlePreview';
import React, { useRef } from 'react';
import { flexCenter } from '@/styles/common.css';
import useCurrentTab from '@/stores/useCurrentTab';
import useArticles from '@/hooks/useArticles';

const ArticleList = () => {
  const targetRef = useRef(null);
  const { tab } = useCurrentTab();
  const { data } = useArticles(targetRef, tab);

  return (
    <div>
      {data?.pages?.at(-1)?.articles?.length === 0 ? (
        '데이터가 없습니다.'
      ) : (
        <div>
          {data?.pages.map((group, i) => (
            <div key={i}>
              {group?.articles?.map(article => <ArticlePreview key={article.slug} article={article} />)}
            </div>
          ))}
        </div>
      )}
      <div className={flexCenter} ref={targetRef}></div>
    </div>
  );
};

export default ArticleList;
