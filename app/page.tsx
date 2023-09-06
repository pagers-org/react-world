import { article, chip, chipWrapper, content, tab, tag } from '@/app/page.css';

import Articles from '@/features/article/components/Articles';

import Banner from '@/src/components/layout/Banner';

import { DUMMY_ARTICLES } from '@/src/fixtures/article';
import { DUMMY_TAGS } from '@/src/fixtures/tag';

export default function MainPage() {
  return (
    <div>
      <Banner title="React-World" description="다양한 기술적 시도를 합니다." />

      <div className={content}>
        <div className={article}>
          <div className={tab}>
            <div>Global Feed</div>
          </div>
          <Articles articles={DUMMY_ARTICLES.articles} />
        </div>
        <div className={tag}>
          popular tags
          <div className={chipWrapper}>
            {DUMMY_TAGS.map((tag) => {
              return (
                <button className={chip} key={tag} type="button">
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
