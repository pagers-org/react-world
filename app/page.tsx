import SideBar from '@/components/layouts/SideBar';

import { articleContainer } from '@/styles/article.css';
import { container, flex, textCenter } from '@/styles/common.css';
import { bannerDescription, bannerTitle } from '@/styles/home.css';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ArticleTab = dynamic(() => import('@/components/article/ArticleTab'), { ssr: false });
const ArticleList = dynamic(() => import('@/components/article/ArticleList'), { ssr: false });
const Banner = dynamic(() => import('@/components/layouts/Banner'), { ssr: false });

export default function Page() {
  return (
    <section>
      <Banner background="green">
        <div className={textCenter}>
          <h1 className={bannerTitle}>conduit</h1>
          <p className={bannerDescription}>A place to share your knowledge.</p>
        </div>
      </Banner>
      <main className={container}>
        <div className={flex}>
          <div className={articleContainer}>
            <ArticleTab />
            <Suspense fallback={<div>Loading2...</div>}>
              <ArticleList />
            </Suspense>
          </div>
          <Suspense fallback={<div>Loading1...</div>}>
            <SideBar />
          </Suspense>
        </div>
      </main>
    </section>
  );
}
