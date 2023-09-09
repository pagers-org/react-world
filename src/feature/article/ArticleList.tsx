import Article from "./Article";
import type { Articles } from "@/types/article";
import { container } from "./ArticleList.css";
import TagList from "./TagList";
import ArticleSkeleton from "./skeleton/ArticleSkeleton";
import { CONTENT_LIMIT } from "@/constants/pagination";

interface Props {
  data: Articles;
  isLoading: boolean;
}

const ArticleList = ({ data, isLoading }: Props) => {
  return (
    <div className={container}>
      {isLoading
        ? new Array(CONTENT_LIMIT).fill(0).map((_, i) => <ArticleSkeleton key={`article-skeleton-${i}`} />)
        : data.articles.map((v, i) => (
            <Article
              key={`article-${i}`}
              favorited={v.favorited}
              favoritesCounts={v.favoritesCount}
              imgSrc={v.author.image}
              authorName={v.author.username}
              createDate={v.createdAt}
              title={v.title}
              description={v.description}
              tagComponent={<TagList tagList={v.tagList} />}
            ></Article>
          ))}
    </div>
  );
};

export default ArticleList;
