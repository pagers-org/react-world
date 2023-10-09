import {
  articleActionButtons,
  articleBanner,
  articleBannerContainer,
  articleBannerHeadLine,
  articleMeta,
  articleMetaAuthor,
  articleMetaImage,
  articleMetaInfo,
  articleMetaInfoAuthor,
  articleMetaInfoDate,
} from './article-banner.css';

type ArticleBannerProps = {
  title: string;
  username: string;
  image: string;
  favorited: boolean;
  favoritesCount: number;
  createdAt: string;
};

export const ArticleBanner = (props: ArticleBannerProps) => {
  return (
    <div class={articleBanner}>
      <div class={articleBannerContainer}>
        <h1 class={articleBannerHeadLine}>{props.title}</h1>

        <div class={articleMeta}>
          <div class={articleMetaAuthor}>
            <a href={`/profile/${props.username}`}>
              <img class={articleMetaImage} alt={props.username} src={props.image} />
            </a>
            <div class={articleMetaInfo}>
              <a href={`/profile/${props.username}`} class={articleMetaInfoAuthor}>
                {props.username}
              </a>
              <span class={articleMetaInfoDate}>{props.createdAt}</span>
            </div>
          </div>
          <div class={articleActionButtons}>
            <button class="btn btn-sm btn-outline-secondary">
              <i class="ion-plus-round" />
              {props.favorited ? 'unfollow' : 'follow'} {props.username}
              <span class="counter">({props.favoritesCount})</span>
            </button>
            <button class="btn btn-sm btn-outline-primary">
              <i class="ion-heart" />
              Favorite Post <span class="counter">({props.favoritesCount})</span>
            </button>
            <button class="btn btn-sm btn-outline-secondary">
              <i class="ion-edit" /> Edit Article
            </button>
            <button class="btn btn-sm btn-outline-danger">
              <i class="ion-trash-a" /> Delete Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
