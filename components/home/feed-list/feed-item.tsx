import { Avatar, Tag } from 'components/ui';

export const FeedItem = () => {
  const feed = {
    slug: 'how-to-train-your-dragon',
    title: 'How to train your dragon',
    description: 'Ever wonder how?',
    body: 'It takes a Jacobian',
    tagList: ['dragons', 'training'],
    createdAt: '2016-02-18T03:22:56.637Z',
    updatedAt: '2016-02-18T03:48:35.824Z',
    favorited: false,
    favoritesCount: 0,
    author: {
      username: 'jake',
      bio: 'I work at statefarm',
      image: 'https://i.stack.imgur.com/xHWG8.jpg',
      following: false,
    },
  };

  const { slug, title, description, author, favoritesCount, tagList } = feed;

  return (
    <li className="list-none">
      <div className="article-preview">
        <div className="article-meta">
          <a href={`/profile/${author.username}`}>
            <Avatar src={author.image} alt={`${author.username}-${author.bio}`} />
          </a>
          <div className="info">
            <a href={`/profile/${author.username}`} className="author">
              {author.username}
            </a>
            <span className="date">January 20th</span>
          </div>

          <button className="btn btn-outline-primary btn-sm pull-xs-right">
            <i className="ion-heart"></i>
            {favoritesCount}
          </button>
        </div>

        <a href={`/article/${slug}`} className="preview-link">
          <h1>{title}</h1>
          <p>{description}</p>
          <span>Read more...</span>

          <ul className="tag-list">
            {tagList.map((tag, index) => (
              <Tag key={index} variant="pill" color="default" outline className="!max-w-none">
                {tag}
              </Tag>
            ))}
          </ul>
        </a>
      </div>
    </li>
  );
};
