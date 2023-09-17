import { Container } from '../shared/Container';
import ArticleActions from './ArticleActions';
import ArticleComments from './ArticleComments';
import ArticleContents from './ArticleContents';
import ArticleHeader from './ArticleHeader';
import useArticleDetailQuery from '../../quries/useArticleDetailQuery';

interface ArticlePageContainerProps {
  articleSlug: string;
}

const ArticlePageContainer = (props: ArticlePageContainerProps) => {
  const { articleSlug } = props;
  const { articleDetail } = useArticleDetailQuery(articleSlug);

  if (!articleDetail) {
    return null;
  }

  return (
    <div className="article-page">
      <ArticleHeader article={articleDetail.article} />
      <Container>
        <ArticleContents
          body={articleDetail.article.body}
          tagList={articleDetail.article.tagList}
        />
        <hr />
        <ArticleActions
          author={articleDetail.article.author}
          createdAt={articleDetail.article.createdAt}
          favorited={articleDetail.article.favorited}
          favoritesCount={articleDetail.article.favoritesCount}
        />
        <ArticleComments />
      </Container>
    </div>
  );
};

export default ArticlePageContainer;
