import { useNavigate, useSearchParams } from '@solidjs/router';
import { createEffect, createResource, For, Show } from 'solid-js';
import { getArticleList } from '@/api/article';
import { Pagination } from '@/components/pagination';
import { ArticlePreview } from './article-preview';
import { ArticlePreviewSkeleton } from './article-preview/article-preview-skeleton';
import { HomePageBannerContainer, HomePagePaginationContainer } from './home-page.css';
import { Sidebar } from './sidebar';

export const HomePage = () => {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams<{ page: string }>();
  const [articleListData] = createResource(() => ({ offset: params.page }), getArticleList);

  createEffect(() => {
    if (
      !params.page ||
      isNaN(+params.page) ||
      +params.page > (articleListData()?.articlesCount || 20) ||
      +params.page < 1
    ) {
      setParams({ page: '1' });
    }
  });

  const handlePageClick = (page: number) => navigate(`?page=${page}`);

  return (
    <>
      <div class={HomePageBannerContainer}>
        <h1>Pagers</h1>
        <span>A place to share your knowledge.</span>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div>
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    나의 피드
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    모든 피드 보기
                  </a>
                </li>
                {/*<li class="nav-item">*/}
                {/*  <a class="nav-link" href="#">*/}
                {/*    Link*/}
                {/*  </a>*/}
                {/*</li>*/}
              </ul>
            </div>

            <Show
              when={!articleListData.loading}
              fallback={
                <div>
                  <For each={[...Array(5)]}>{ArticlePreviewSkeleton}</For>
                </div>
              }
            >
              <div>
                <For each={articleListData()?.articles}>
                  {(article) => <ArticlePreview article={article} />}
                </For>
              </div>

              <div class={HomePagePaginationContainer}>
                <Pagination
                  initialPage={Number(params.page)}
                  pages={Math.ceil(articleListData()!.articlesCount / 5)}
                  maxPages={5}
                  onClick={handlePageClick}
                />
              </div>
            </Show>
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};
