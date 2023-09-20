import { Container } from '@components/shared/Container';
import ArticleActions from './ArticleActions';
import ArticleComments from './ArticleComments';
import ArticleContents from './ArticleContents';
import ArticleHeader from './ArticleHeader';
import useArticleDetailQuery from '@quries/useArticleDetailQuery';

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
      <ArticleHeader
        title={articleDetail.article.title}
        authorName={articleDetail.article.author.username}
        authorImage={articleDetail.article.author.image}
        createdAt={articleDetail.article.createdAt}
        favoritesCount={articleDetail.article.favoritesCount}
      />
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
