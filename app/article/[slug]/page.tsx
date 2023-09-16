import { Author } from "components/article/author";
import { Content } from "components/article/content";
import { Summary } from "components/article/summary";

const ArticlePage = () => {
  return (
    <>
      <Summary />
      <Content />
      <Author />
    </>
  );
};

export default ArticlePage;
