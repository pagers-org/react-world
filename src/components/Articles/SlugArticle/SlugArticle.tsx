"use client";

import React from "react";
import SlugArticleCard from "@/components/composables/Card/SlugArticleCard";
import Link from "next/link";
import {
  slug_article_header_container,
  slug_article_title,
  slug_article_user_date_container,
  slug_article_user_link,
  slug_seperator,
  slug_article_user_date_wrapper,
  hastag_container,
  hastag,
  preview_container,
  slug_article_user_profile_container,
  user_profile,
  user_image,
  name_and_description,
  name,
  description,
  line,
  user_contact,
  wrapper_container,
} from "@/styles/slug_article.css";
import { myStyle } from "@/styles/container.css";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Image from "next/image";

type SlugArticleType = {
  title: string;
  body: string;
  tagList: string[];
  updatedAt: string;
  username: string;
  image: string;
  following: boolean;
  createdAt: string;
};

export default function SlugArticle({
  title,
  createdAt,
  body,
  tagList,
  updatedAt,
  username,
  image,
  following,
}: SlugArticleType) {
  return (
    <>
      <div className={slug_article_header_container}>
        <h1 className={`${myStyle} ${slug_article_title}`}>{title}</h1>
        <div className={`${slug_article_user_date_container} ${myStyle}`}>
          <div className={slug_article_user_date_wrapper}>
            <Link
              className={`${slug_article_user_link} ${myStyle}`}
              href={`/@${username}`}
            >
              {username}
            </Link>
            <span className={slug_seperator}>·</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
      <div className={hastag_container}>
        {tagList.map((tag, key) => {
          return (
            <div className={`${hastag} ${myStyle}`} key={key}>
              {tag}
            </div>
          );
        })}
      </div>
      <MarkdownPreview source={body} className={preview_container} />

      <div className={slug_article_user_profile_container}>
        <div className={wrapper_container}>
          <div className={user_profile}>
            <Link href={`/@${username}`}>
              <Image
                className={user_image}
                src={image}
                width={300}
                height={300}
                alt="user_image"
              />
            </Link>
            <div className={name_and_description}>
              <div className={name}>
                <Link href={`/@${username}`}>{username}</Link>
              </div>
              <div className={description}>한 줄 소개</div>
            </div>
          </div>
          <div className={`${line} ${myStyle}`}></div>
          <div className={user_contact}>{/* 소셜 아이콘들 */}</div>
        </div>
      </div>
    </>
  );
}
