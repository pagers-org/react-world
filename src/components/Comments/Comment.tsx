import React from "react";
import {
  existing_comment_wrapper,
  existing_user_info_container,
  comment_info,
  user_name,
  user_profile,
  user_profile_image,
  actions,
  date,
  comment_update_button,
  comment_delete_button,
  comment_body_container,
} from "@/styles/comment.css";
import { myStyle } from "@/styles/container.css";
import Image from "next/image";
import Link from "next/link";

type CommentType = {
  id: number;
  comment: {
    author: {
      username: string;
      image: string;
    };
    createdAt: string;
    body: string;
  };
  userMatch: boolean;
  deleteCommentHandler: (id:number) => void;
};

export default function Comment({
  comment,
  id,
  userMatch,
  deleteCommentHandler,
}: CommentType) {
  return (
    <>
      <div>
        <div className={existing_comment_wrapper}>
          <div>
            <div className={existing_user_info_container}>
              <div className={user_profile}>
                <Link href={`/@${comment.author.username}`}>
                  <Image
                    className={user_profile_image}
                    src={comment.author.image}
                    height={70}
                    width={70}
                    alt="user_image"
                  />
                </Link>
                <div className={comment_info}>
                  <div className={user_name}>
                    <Link href={`/@${comment.author.username}`}>
                      {comment.author.username}
                    </Link>
                  </div>
                  <div className={date}>{comment.createdAt} </div>
                </div>
              </div>
              {userMatch && (
                <div className={actions}>
                  <span className={`${comment_update_button} ${myStyle}`}>
                    수정
                  </span>
                  <span
                    className={`${comment_delete_button} ${myStyle}`}
                    onClick={() =>deleteCommentHandler(id)}
                  >
                    삭제
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className={`${comment_body_container} ${myStyle}`}>
            <p>{comment.body}</p>
          </div>
        </div>
      </div>
    </>
  );
}
