import Skeleton from "@/components/skeleton/Skeleton";
import {
  authorDescription,
  authorImg,
  container,
  contentContainer,
  titleContainer,
  articleTitle,
  author,
  articleContent,
  articleDate,
  headerContainer,
  articleTagContainer,
} from "./ArticleSkeleton.css";

const ArticleSkeleton = () => {
  return (
    <div className={container}>
      <div className={headerContainer}>
        <div className={titleContainer}>
          <Skeleton variant="circular" className={authorImg} />
          <div className={authorDescription}>
            <Skeleton variant="rounded" className={author} />
            <Skeleton variant="rounded" className={articleDate} />
          </div>
        </div>
      </div>

      <a className={contentContainer}>
        <Skeleton variant="rounded" className={articleTitle} />
        <Skeleton variant="rounded" className={articleContent} />
      </a>

      <Skeleton variant="rounded" className={articleTagContainer} />
    </div>
  );
};

export default ArticleSkeleton;
