type GlobalFeedResponseType = {
  articles: [
    {
      slug: 'string';
      title: 'string';
      description: 'string';
      body: 'string';
      tagList: ['string'];
      createdAt: '2023-09-20T11:51:46.724Z';
      updatedAt: '2023-09-20T11:51:46.724Z';
      favorited: true;
      favoritesCount: 0;
      author: {
        username: 'string';
        bio: 'string';
        image: 'string';
        following: true;
      };
    },
  ];
  articlesCount: 0;
};

export type { GlobalFeedResponseType };
