import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { dehydrate } from '@tanstack/react-query';

import Banner from '@/src/components/layout/Banner';

import { getQueryClient } from '@/src/lib/react-query/getQueryClient';
import Hydrate from '@/src/lib/react-query/hydrate.client';

import Tab from '@/features/article/components/Tab';
import ArticleSkeleton from '@/features/article/components/ArticleSkeleton';
import Articles from '@/features/article/components/Articles';
import { prefetchGetArticleListQuery } from '@/features/article/hooks/queries/prefetchGetArticleListQuery';

import Tags from '@/features/tag/components/Tags';
import { prefetchGetTagListQuery } from '@/features/tag/hooks/prefetchGetTagListQuery';

import * as styles from '@/app/page.css';
import { useAtom } from 'jotai';
import { authAtom } from '@/src/providers/AuthProvider';

export default async function MainPage() {
  const queryClient = getQueryClient();
  const cookieStore = cookies();

  const accessToken = cookieStore.get('access_token')?.value;

  await Promise.all([
    prefetchGetArticleListQuery(queryClient),
    prefetchGetTagListQuery(queryClient),
  ]);

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

          <Suspense
            fallback={
              <>
                <ArticleSkeleton />
                <ArticleSkeleton />
                <ArticleSkeleton />
                <ArticleSkeleton />
                <ArticleSkeleton />
                <ArticleSkeleton />
                <ArticleSkeleton />
              </>
            }
          >
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
