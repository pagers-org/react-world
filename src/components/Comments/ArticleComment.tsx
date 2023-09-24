"use client";

import { myStyle } from "@/styles/container.css";
import CommentCard from "../composables/Card/CommentCard";
import { comment_count, write_comment_container } from "@/styles/comment.css";
import {
  write_comment_text_area,
  write_comment_button_container,
  write_comment_button,
  existing_comment_container,
} from "@/styles/comment.css";
import { useRef } from "react";
import { useState } from "react";
import useFetch from "@/libs/hooks/useFetch";
import Comment from "./Comment";

type Author = {
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
};

type Comment = {
  author: Author;
  body: string;
  createdAt: string;
  id: number;
  updatedAt: string;
};

type CommentType = {
  commentsCount: number;
  comments: Comment[];
  articleSlug: string;
  tokenValue?: string;
  userMatch: boolean;
};

export default function ArticleComment({
  comments,
  commentsCount,
  articleSlug,
  tokenValue,
  userMatch,
}: CommentType) {
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const { sendRequest } = useFetch();
  const [totalComment, setTotalComment] = useState<Comment[]>(comments);

  const fetchCommentHandler = async () => {
    if (commentRef.current) {
      try {
        const data = await sendRequest(
          `https://api.realworld.io/api/articles/${articleSlug}/comments`,
          "POST",
          {
            comment: {
              body: commentRef.current.value,
            },
          },
          {
            Authorization: `Bearer ${tokenValue}`,
          }
        );

        const { comment } = data;

        setTotalComment((prevState) => [...prevState, comment]);

        console.log(data);
      } catch (err) {
        console.error(err);
      }

      commentRef.current.value = "";
    }
  };

  const deleteCommentHandler = (id: number) => {
    const filterComments = totalComment.filter((comment) => comment.id !== id);

    setTotalComment([...filterComments]);
  };

  return (
    <>
      <CommentCard>
        <h4 className={comment_count}>{commentsCount}개의 댓글</h4>
        <div>
          <div className={write_comment_container}>
            <textarea
              placeholder="댓글을 작성하세요!"
              className={`${myStyle} ${write_comment_text_area}`}
              ref={commentRef}
            />
          </div>
          <div className={write_comment_button_container}>
            <button
              className={`${write_comment_button} ${myStyle}`}
              onClick={fetchCommentHandler}
            >
              댓글 작성
            </button>
          </div>
          <div className={existing_comment_container}>
            {totalComment.length > 0 &&
              totalComment.map((comment: any, key) => {
                return (
                  <Comment
                    deleteCommentHandler={deleteCommentHandler}
                    id={comment.id}
                    key={key}
                    comment={comment}
                    userMatch={userMatch}
                  />
                );
              })}
          </div>
        </div>
      </CommentCard>
    </>
  );
}
