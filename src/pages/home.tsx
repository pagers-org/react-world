import { useSearchParams } from '@solidjs/router';
import { createResource, For, Show } from 'solid-js';
import { getArticleList } from '@/api/article';
import { LoadingSpinner, LoadingSpinnerContainer } from '@/components/loading-spinner';
import { Pagination } from '@/components/pagination';
import { Sidebar } from '@/templates/home/sidebar';
import { Motion } from '@motionone/solid';

// TOOD-REF: https://blog.logrocket.com/animating-solidjs-apps-motion-one/

const HomePage = () => {
  const [params] = useSearchParams<{ offset: string; limit: string }>();
  const [data] = createResource(params, getArticleList);

  return (
    <Motion.div
      animate={{
        opacity: [0, 1],
      }}
    >
      <nav class="navbar navbar-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            conduit
          </a>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              <a class="nav-link active" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Sign in
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="home-page">
        <div class="banner">
          <div class="container">
            <h1 class="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>

        <div class="container page">
          <div class="row">
            <div class="col-md-9">
              <div class="feed-toggle">
                <ul class="nav nav-pills outline-active">
                  <li class="nav-item">
                    <a class="nav-link" href="">
                      Your Feed
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="">
                      Global Feed
                    </a>
                  </li>
                </ul>
              </div>
              <Show
                when={!data.loading}
                fallback={
                  <div class={LoadingSpinnerContainer}>
                    <LoadingSpinner size="50px" />
                  </div>
                }
              >
                <div class="article-preview-list">
                  <For each={data()?.articles}>
                    {(article) => (
                      <div class="article-preview">
                        <div class="article-meta">
                          <a href={`/profile/${article.author.username}`}>
                            <img src={article.author.image} />
                          </a>
                          <div class="info">
                            <a href={`/profile/${article.author.username}`} class="author">
                              {article.author.username}
                            </a>
                            <span class="date">{article.updatedAt}</span>
                          </div>
                          <button class="btn btn-outline-primary btn-sm pull-xs-right">
                            <i class="ion-heart" /> {article.favoritesCount}
                          </button>
                        </div>
                        <a href={`/article/${article.slug}`} class="preview-link">
                          <h1>{article.title}</h1>
                          <p>{article.description}</p>
                          <span>Read more...</span>
                          <ul class="tag-list">
                            <For each={article.tagList}>
                              {(tag) => <li class="tag-default tag-pill tag-outline">{tag}</li>}
                            </For>
                          </ul>
                        </a>
                      </div>
                    )}
                  </For>
                </div>

                <Pagination pages={5} maxPages={data()!.articlesCount} />
              </Show>
            </div>

            <Sidebar />
          </div>
        </div>
      </div>

      <footer>
        <div class="container">
          <a href="/" class="logo-font">
            conduit
          </a>
          <span class="attribution">
            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code
            &amp; design licensed under MIT.
          </span>
        </div>
      </footer>
    </Motion.div>
  );
};

export default HomePage;
