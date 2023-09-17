import { Container } from '../shared/Container';
import ArticleActions from './ArticleActions';
import ArticleComments from './ArticleComments';
import ArticleContents from './ArticleContents';
import ArticleHeader from './ArticleHeader';

const ArticlePageContainer = () => {
  return (
    <div className="article-page">
      <ArticleHeader />
      <Container>
        <ArticleContents />
        <hr />
        <ArticleActions />
        <ArticleComments />
      </Container>
    </div>
  );
};

export default ArticlePageContainer;
