import { dehydrate } from '@tanstack/react-query';

import * as styles from '@/app/page.css';

import Articles from '@/features/article/components/Articles';
import { articleApiService } from '@/features/article/services/ApiService';

import Banner from '@/src/components/layout/Banner';

import { DUMMY_TAGS } from '@/src/fixtures/tag';

import { getQueryClient } from '@/src/lib/react-query/getQueryClient';
import Hydrate from '@/src/lib/react-query/hydrate.client';

export default async function MainPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['article', 1], () =>
    articleApiService.getArticles(1),
  );
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
            <div>Global Feed</div>
          </div>
          <Articles />
        </div>

        <div className={styles.tag}>
          popular tags
          <div className={styles.chipWrapper}>
            {DUMMY_TAGS.map((tag) => {
              return (
                <button className={styles.chip} key={tag} type="button">
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Hydrate>
  );
}
