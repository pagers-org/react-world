interface ArticleContentsProps {
  body: string;
  tagList: string[];
}

const ArticleContents = (props: ArticleContentsProps) => {
  const { body, tagList } = props;

  return (
    <div className="row article-content">
      <div className="col-md-12">
        <p>{body}</p>
        <ul className="tag-list">
          {tagList.map((tag, index) => (
            <li key={index} className="tag-default tag-pill tag-outline">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArticleContents;
