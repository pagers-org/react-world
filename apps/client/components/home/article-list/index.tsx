import { IArticle } from '@/features/graphql/queries/articles';
import useCustomNavigate from '@/features/hooks/use-create-query-string';

interface IArticleListProps {
    articleListData: IArticle[];
}

export default function ArticleList({ articleListData }: IArticleListProps) {
    const { moveToUrlWithoutQuery } = useCustomNavigate();
    return (
        <>
            {articleListData.map(article => (
                <div
                    key={article.slug}
                    onClick={() =>
                        moveToUrlWithoutQuery({
                            pathName: `/article/${article.slug}`,
                        })
                    }
                    className="article-preview"
                >
                    <div className="article-meta">
                        <a href={`/profile/${article.author.username}`}>
                            <img src={article.author.image} />
                        </a>
                        <div className="info">
                            <a
                                href={`/profile/${article.author.username}`}
                                className="author"
                            >
                                {article.author.username}
                            </a>
                            <span className="date">{article.author.bio}</span>
                        </div>
                        <button className="btn btn-outline-primary btn-sm pull-xs-right">
                            <i className="ion-heart"></i>{' '}
                            {article.favoritesCount}
                        </button>
                    </div>
                    <a
                        href={`/profile/${article.author.username}`}
                        className="preview-link"
                    >
                        <h1>{article.title}</h1>
                        <p>{article.description}</p>
                        <span>Read more...</span>

                        <ul className="tag-list">
                            {article.tagList.map(tag => (
                                <li
                                    key={tag}
                                    className="tag-default tag-pill tag-outline"
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </a>
                </div>
            ))}
        </>
    );
}
