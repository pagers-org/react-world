interface ArticlePreviewProps {
  authorProfileLink: string;
  authorProfileImageUrl: string;
  authorName: string;
  publishDate: string;
  likeCount: number;
  articleLink: string;
  articleTitle: string;
  articleDescription: string;
  tags: string[];
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  authorProfileLink,
  authorProfileImageUrl,
  authorName,
  publishDate,
  likeCount,
  articleLink,
  articleTitle,
  articleDescription,
  tags,
}) => (
  <div className="article-preview">
    <div className="article-meta">
      <a href={authorProfileLink}>
        <img src={authorProfileImageUrl} />
      </a>
      <div className="info">
        <a href={authorProfileLink} className="author">
          {authorName}
        </a>
        <span className="date">{publishDate}</span>
      </div>
      <button className="btn btn-outline-primary btn-sm pull-xs-right">
        <i className="ion-heart"></i> {likeCount}
      </button>
    </div>
    <a href={articleLink} className="preview-link">
      <h1>{articleTitle}</h1>
      <p>{articleDescription}</p>
      <span>Read more...</span>
      <ul className="tag-list">
        {tags.map(tag => (
          <li className="tag-default tag-pill tag-outline" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </a>
  </div>
);

export default ArticlePreview;
