export interface ArticlePreviewParams {
  offset: number;
  limit: number;
}

// TODO: 클라이언트에서 좀 더 가독성 높은 선언이 되도록 프로퍼티 이름 변경하고 매핑 로직 작성할 것
export interface ArticleAuthor {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface ArticlePreviewData {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: ArticleAuthor;
}

export interface ArticlePreviewResponse {
  articles: ArticlePreviewData[];
  articlesCount: number;
}
