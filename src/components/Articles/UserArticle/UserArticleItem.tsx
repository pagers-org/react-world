import React from "react";
import { myStyle } from "@/styles/container.css";
import {
  user_article_container,
  tag_container,
  sub_info_container,
  hashtag,
  article_likes,
  article_title,
  notFirst,
  heart_icon,
} from "@/styles/user_article.css";
import Link from "next/link";
import { slug_seperator } from "@/styles/slug_article.css";
import { parsingDate } from "@/utils/parsingDate";
import HeartIcon from "../../../assets/images/heart.svg";
import Image from "next/image";

type UserArticleItemType = {
  title: string;
  tagList: string[];
  createdAt: string;
  description: string;
  username: string;
  userimage: string;
  favoritesCount: number;
  favorited: boolean;
  slug: string;
  isFirst: boolean;
};

export default function UserArticleItem({
  title,
  tagList,
  createdAt,
  description,
  username,
  userimage,
  favoritesCount,
  favorited,
  slug,
  isFirst,
}: UserArticleItemType) {
  const parsedDate = parsingDate(createdAt);

  return (
    <>
      <div
        className={`${
          isFirst ? "" : notFirst
        } ${user_article_container} ${myStyle}`}
      >
        {/* <div className={user_article_image_container}>

        </div> */}

        <Link href={`/article/${slug}`}>
          <h2 className={article_title}>{title}</h2>
        </Link>
        <p>{description}</p>
        <div className={`${tag_container}`}>
          {tagList.length > 0 &&
            tagList.map((tag, key) => {
              return (
                <div className={`${hashtag} ${myStyle}`} key={key}>
                  {tag}
                </div>
              );
            })}
        </div>
        <div className={`${sub_info_container} ${myStyle}`}>
          <span>{parsedDate}</span>
          <div className={slug_seperator}>·</div>
          {/* 아이콘과 좋아요 갯수 수평이 안맞고, 아이콘 색상이 파랑색으로 되어있는데, svg 파일 만들어서 넣을 예정입니다. */}
          <span className={article_likes}>
            <Image
              className={heart_icon}
              src={HeartIcon}
              width={20}
              height={20}
              alt="icon"
            />
            {favoritesCount}
          </span>
        </div>
      </div>
    </>
  );
}
