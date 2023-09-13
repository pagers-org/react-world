import { Suspense } from 'react';
import { dehydrate } from '@tanstack/react-query';

import Banner from '@/src/components/layout/Banner';

import { getQueryClient } from '@/src/lib/react-query/getQueryClient';
import Hydrate from '@/src/lib/react-query/hydrate.client';

import Tab from '@/features/article/components/Tab';
import Articles from '@/features/article/components/Articles';
import { prefetchGetArticleListQuery } from '@/features/article/hooks/queries/prefetchGetArticleListQuery';

import Tags from '@/features/tag/components/Tags';
import { prefetchGetTagListQuery } from '@/features/tag/hooks/prefetchGetTagListQuery';

import * as styles from '@/app/page.css';

export default async function MainPage() {
  const queryClient = getQueryClient();

  await prefetchGetArticleListQuery(queryClient);
  await prefetchGetTagListQuery(queryClient);

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Banner
        title="React-World"
        description="다양한 기술적 시도를 합니다."
        background="primary"
      />
      <div className={styles.content}>
        <div className={styles.article}>
          <div className={styles.tab}>
            <Tab />
          </div>
          <Suspense fallback={<div>loading...</div>}>
            <Articles />
          </Suspense>
        </div>
        <div className={styles.tag}>
          <Tags />
        </div>
      </div>
    </Hydrate>
  );
}
