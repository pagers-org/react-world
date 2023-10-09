import { useParams } from '@solidjs/router';
import { createResource, For, Show } from 'solid-js';
import { getArticle } from '@/api/article';
import { ArticleBanner } from '@/templates/article';
import { ArticleActions } from '@/templates/article/article-actions';

const ArticlePage = () => {
  const params = useParams();
  const [articleDetailData] = createResource({ slug: params.slug }, getArticle);

  return (
    <div class="article-page">
      {/* 게시글 상세 배너 영역 */}
      <Show when={articleDetailData()}>
        {(articleDetailData) => (
          <ArticleBanner
            title={articleDetailData().article.title}
            username={articleDetailData().article.author.username}
            image={articleDetailData().article.author.image}
            favorited={articleDetailData().article.favorited}
            favoritesCount={articleDetailData().article.favoritesCount}
            createdAt={articleDetailData().article.createdAt}
          />
        )}
      </Show>

      {/* 게시글 컨텐츠 영역 */}
      <div class="container page">
        <div class="container row article-content">
          <div class="col-md-12">
            <p>{articleDetailData()?.article.body}</p>
            <ul class="tag-list">
              <For each={articleDetailData()?.article.tagList}>
                {(tag) => <li class="tag-default tag-pill tag-outline">{tag}</li>}
              </For>
            </ul>
          </div>
        </div>

        <hr />

        <ArticleActions />

        <div class="row">
          <div class="col-xs-12">
            <form class="card comment-form">
              <div class="card-block">
                <textarea class="form-control" placeholder="Write a comment..." rows="3" />
              </div>
              <div class="card-footer">
                <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
                <button class="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>

            <div class="card">
              <div class="card-block">
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
              </div>
              <div class="card-footer">
                <a href="/profile/author" class="comment-author">
                  <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
                </a>
                <a href="/profile/jacob-schmidt" class="comment-author">
                  Jacob Schmidt
                </a>
                <span class="date-posted">Dec 29th</span>
              </div>
            </div>

            <div class="card">
              <div class="card-block">
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
              </div>
              <div class="card-footer">
                <a href="/profile/author" class="comment-author">
                  <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
                </a>
                <a href="/profile/jacob-schmidt" class="comment-author">
                  Jacob Schmidt
                </a>
                <span class="date-posted">Dec 29th</span>
                <span class="mod-options">
                  <i class="ion-trash-a" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
