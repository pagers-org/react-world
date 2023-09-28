interface ArticlePostRequestType {
  article: {
    title: string;
    description: string;
    body: string;
    tagList: string[];
  };
}

interface FeedResponseType {
  articles: [
    {
      slug: string;
      title: string;
      description: string;
      body: string;
      tagList: string[];
      createdAt: string;
      updatedAt: string;
      favorited: boolean;
      favoritesCount: number;
      author: {
        username: string;
        bio: string;
        image: string;
        following: boolean;
      };
    },
  ];
  articlesCount: number;
}

export type { FeedResponseType, ArticlePostRequestType };
