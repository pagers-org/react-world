interface ArticleTagListProps {
  tags: string[];
}

const ArticleTagList = ({ tags }: ArticleTagListProps) => (
  <div className="col-md-3">
    <div className="sidebar">
      <p>Popular Tags</p>
      <div className="tag-list">
        {tags.map(tag => (
          <a key={tag} href="" className="tag-pill tag-default">
            {tag}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default ArticleTagList;
