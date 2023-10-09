import {
  articleActionsContainer,
  articleMeta,
  articleMetaImage,
  articleMetaInfo,
  articleMetaInfoAuthor,
  articleMetaInfoDate,
} from './article-actions.css';

export const ArticleActions = () => {
  return (
    <div class={articleActionsContainer}>
      <div class={articleMeta}>
        <a href="profile.html">
          <img class={articleMetaImage} src="http://i.imgur.com/Qr71crq.jpg" />
        </a>
        <div class={articleMetaInfo}>
          <a href="" class={articleMetaInfoAuthor}>
            Eric Simons
          </a>
          <span class={articleMetaInfoDate}>January 20th</span>
        </div>
        <button class="btn btn-sm btn-outline-secondary">
          <i class="ion-plus-round" />
          Follow Eric Simons
        </button>
        <button class="btn btn-sm btn-outline-primary">
          <i class="ion-heart" />
          Favorite Article <span class="counter">(29)</span>
        </button>
        <button class="btn btn-sm btn-outline-secondary">
          <i class="ion-edit" /> Edit Article
        </button>
        <button class="btn btn-sm btn-outline-danger">
          <i class="ion-trash-a" /> Delete Article
        </button>
      </div>
    </div>
  );
};
