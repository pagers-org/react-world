export type Article = {
  slug: string;
  title: string;
  description: string;
  tagList: string[];
  favorited: boolean;
  favoritesCount: number;
  author: Author;
  createdAt: Date;
  updatedAt: Date;
};

export type Author = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};
