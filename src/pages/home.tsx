import { createResource, Show } from 'solid-js';
import { getArticleList } from '@/api/article';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { LoadingSpinnerContainer } from '@/templates/home.css';
import { Motion } from '@motionone/solid';

// TOOD-REF: https://blog.logrocket.com/animating-solidjs-apps-motion-one/

const HomePage = () => {
  const [data] = createResource(getArticleList);

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
                  <div class="article-preview">
                    <div class="article-meta">
                      <a href="/profile/eric-simons">
                        <img src="http://i.imgur.com/Qr71crq.jpg" />
                      </a>
                      <div class="info">
                        <a href="/profile/eric-simons" class="author">
                          Eric Simons
                        </a>
                        <span class="date">January 20th</span>
                      </div>
                      <button class="btn btn-outline-primary btn-sm pull-xs-right">
                        <i class="ion-heart" /> 29
                      </button>
                    </div>
                    <a href="/article/how-to-build-webapps-that-scale" class="preview-link">
                      <h1>How to build webapps that scale</h1>
                      <p>This is the description for the post.</p>
                      <span>Read more...</span>
                      <ul class="tag-list">
                        <li class="tag-default tag-pill tag-outline">realworld</li>
                        <li class="tag-default tag-pill tag-outline">implementations</li>
                      </ul>
                    </a>
                  </div>

                  <div class="article-preview">
                    <div class="article-meta">
                      <a href="/profile/albert-pai">
                        <img src="http://i.imgur.com/N4VcUeJ.jpg" />
                      </a>
                      <div class="info">
                        <a href="/profile/albert-pai" class="author">
                          Albert Pai
                        </a>
                        <span class="date">January 20th</span>
                      </div>
                      <button class="btn btn-outline-primary btn-sm pull-xs-right">
                        <i class="ion-heart" /> 32
                      </button>
                    </div>
                    <a href="/article/the-song-you" class="preview-link">
                      <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
                      <p>This is the description for the post.</p>
                      <span>Read more...</span>
                      <ul class="tag-list">
                        <li class="tag-default tag-pill tag-outline">realworld</li>
                        <li class="tag-default tag-pill tag-outline">implementations</li>
                      </ul>
                    </a>
                  </div>
                </div>

                <ul class="pagination">
                  <li class="page-item active">
                    <a class="page-link" href="">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="">
                      2
                    </a>
                  </li>
                </ul>
              </Show>
            </div>

            <div class="col-md-3">
              <div class="sidebar">
                <p>Popular Tags</p>

                <div class="tag-list">
                  <a href="" class="tag-pill tag-default">
                    programming
                  </a>
                  <a href="" class="tag-pill tag-default">
                    javascript
                  </a>
                  <a href="" class="tag-pill tag-default">
                    emberjs
                  </a>
                  <a href="" class="tag-pill tag-default">
                    angularjs
                  </a>
                  <a href="" class="tag-pill tag-default">
                    react
                  </a>
                  <a href="" class="tag-pill tag-default">
                    mean
                  </a>
                  <a href="" class="tag-pill tag-default">
                    node
                  </a>
                  <a href="" class="tag-pill tag-default">
                    rails
                  </a>
                </div>
              </div>
            </div>
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
