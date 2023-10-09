import { type Component, createMemo, For } from 'solid-js';
import type { Article } from '@/api/article.types';
import {
  articlePreviewContainer,
  articlePreviewContent,
  articlePreviewContentDescription,
  articlePreviewContentReadMore,
  articlePreviewContentReadMoreBox,
  articlePreviewContentTagList,
  articlePreviewContentTitle,
  articlePreviewMeta,
  articlePreviewMetaInfo,
  articlePreviewMetaInfoAuthor,
  articlePreviewMetaInfoAuthorImage,
  articlePreviewMetaInfoAuthorImageBox,
  articlePreviewMetaInfoBox,
  articlePreviewMetaInfoDate,
} from './article-preview.css';

type ArticlePreviewProps = {
  article: Article;
};

export const ArticlePreview: Component<ArticlePreviewProps> = (props) => {
  const article = createMemo(() => props.article);

  return (
    <div class={articlePreviewContainer}>
      <div class={articlePreviewMeta}>
        <div class={articlePreviewMetaInfo}>
          <a
            class={articlePreviewMetaInfoAuthorImageBox}
            href={`/profile/${article().author.username}`}
          >
            <img
              class={articlePreviewMetaInfoAuthorImage}
              alt={article().author.username}
              src={article().author.image}
            />
          </a>
          <div class={articlePreviewMetaInfoBox}>
            <a class={articlePreviewMetaInfoAuthor} href={`/profile/${article().author.username}`}>
              {article().author.username}
            </a>
            <span class={articlePreviewMetaInfoDate}>
              {new Date(article().createdAt).toDateString()}
            </span>
          </div>
        </div>
        <button class="btn btn-outline-primary btn-sm">
          <i class="ion-heart" /> {article().favoritesCount}
        </button>
      </div>
      <a href={`/article/${article().slug}`} class={articlePreviewContent}>
        <h1 class={articlePreviewContentTitle}>{article().title}</h1>
        <p class={articlePreviewContentDescription}>{article().description}</p>
        <div class={articlePreviewContentReadMoreBox}>
          <span class={articlePreviewContentReadMore}>Read more...</span>
          <div class={articlePreviewContentTagList}>
            <For each={article().tagList}>
              {(tag) => <span class="badge text-bg-secondary">{tag}</span>}
            </For>
          </div>
        </div>
      </a>
    </div>
  );
};
