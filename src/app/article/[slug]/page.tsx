"use client";
import Tag from "@/components/atoms/Tag";
import Profile from "@/components/common/Profile";
import { getArticle } from "@/services/articles";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

type Props = { params: { slug: string } };

const ArticleDetail = ({ params: { slug } }: Props) => {
  const { data: article } = useQuery([`/api/article/${slug}`], () => getArticle(slug));

  if (!article) return <div>Loading...</div>;

  console.log(article);
  const { title, author, createdAt, body, tagList } = article;

  return (
    <div>
      <section className="bg-gray-700  px-[15vw] py-[5vh]">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
        <div className="pt-6">
          <Profile src={author.image} name={author.username} date={createdAt} />
        </div>
      </section>
      <article className="mx-[15vw] py-[5vh] flex flex-col gap-8">
        <p className="text-lg">{body}</p>
        <ul className="flex gap-1">
          {tagList.map((tag) => (
            <Tag text={tag} />
          ))}
        </ul>
        <hr />
        <section className="flex flex-col gap-10 items-center">
          <Profile src={author.image} name={author.username} date={createdAt} />
          <p show-authed="false">
            <Link className="text-primary" href="/login">
              Sign in
            </Link>
            &nbsp;or&nbsp;
            <Link className="text-primary" href="/register">
              sign up
            </Link>
            to add comments on this article.
          </p>
        </section>
      </article>
    </div>
  );
};

export default ArticleDetail;
