import type { ArticleDTO } from "../_types/articles.types";

interface ArticleContentProps {
  article: ArticleDTO;
}

export function ArticleContent({ article: { article } }: ArticleContentProps): JSX.Element {
  return (
    <>
      <div className="row article-content">
        <div className="col-md-12">
          <h2 id="introducing-ionic">Description</h2>
          <p>{article.description}</p>
          <h2 id="introducing-ionic">Main</h2>
          <p>{article.body.replace(/\\n/g, "\n")}</p>
          <ul className="tag-list">
            {article.tagList.map(tag => (
              <li className="tag-default tag-pill tag-outline" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
}
