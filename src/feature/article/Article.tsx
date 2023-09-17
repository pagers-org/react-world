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
  likeIcon,
  likeButton,
  likeCount,
  articleTagContainer,
} from "./Article.css";
import SvgIcon from "@/components/SvgIcon";
import LikeIcon from "@/assets/icons/like-icon.svg";

import { formatDate } from "@/utils/date-format";
import type { ReactNode } from "react";

interface Props {
  imgSrc: string;
  authorName: string;
  createDate: string;
  title: string;
  description: string;
  favorited: boolean;
  favoritesCounts: number;
  tagComponent: ReactNode;
}

const Article = ({
  imgSrc,
  authorName,
  createDate,
  title,
  description,
  favorited,
  favoritesCounts,
  tagComponent,
}: Props) => {
  return (
    <div className={container}>
      <div className={headerContainer}>
        <div className={titleContainer}>
          <img src={imgSrc} width={32} height={32} className={authorImg} />
          <div className={authorDescription}>
            <a className={author}>{authorName}</a>
            <span className={articleDate}>{formatDate(createDate)}</span>
          </div>
        </div>
        <button className={`${likeButton} ${favorited ? "active" : ""}`}>
          <SvgIcon src={LikeIcon.src} id="like-icon" className={likeIcon} />
          <span className={likeCount}>{favoritesCounts}</span>
        </button>
      </div>

      <a className={contentContainer}>
        <h5 className={articleTitle}>{title}</h5>
        <p className={articleContent}>{description}</p>
      </a>

      <div className={articleTagContainer}>{tagComponent}</div>
    </div>
  );
};

export default Article;
