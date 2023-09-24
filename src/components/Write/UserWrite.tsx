"use client";

import WriteFormCard from "../composables/Card/WriteFormCard";
import Input from "../composables/Input/Input";
import { useInput } from "@/libs/hooks/useInput";
import {
  write_and_preview_container,
  user_write_container,
  title_container,
  title_input,
  description_container,
  description_input,
  button_container,
  button,
  exit,
  submit,
} from "@/styles/user_write.css";
import { myStyle } from "@/styles/container.css";
import React, { useEffect, useState } from "react";
import useFetch from "@/libs/hooks/useFetch";
import { mockPost } from "@/utils/mockPost";
import HashTag from "./HashTag";
import { useHashTag } from "@/libs/hooks/useHashtag";
import WriteForm from "./WriteForm";
import MarkdownPreview from "@uiw/react-markdown-preview";
import LoadingSpinner from "../composables/LoadingSpinner.tsx/LoadingSpinner";
import { useRouter } from "next/navigation";

type UserWriteType = {
  tokenValue?: string;
};

export default function UserWrite({ tokenValue }: UserWriteType) {
  const router = useRouter();
  const { inputState, inputHandler } = useInput({
    title: {
      value: "",
    },
    description: {
      value: "",
    },
  });

  const [bodyContent, setBodyContent] = useState(mockPost);

  const bodyContentHandler = (value: string) => {
    setBodyContent(value);
  };
  const { sendRequest, isLoading } = useFetch();

  const {
    tagValue,
    tagList,
    onKeyDownHandler,
    onKeyUpHandler,
    tagValueHandler,
    deleteHashTagHandler,
  } = useHashTag();

  const postAritcleHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log("hi");

    try {
      const data = await sendRequest(
        "https://api.realworld.io/api/articles",
        "POST",
        {
          article: {
            title: inputState.title.value,
            description: inputState.description.value,
            body: bodyContent,
            tagList: tagList,
          },
        },
        {
          Authorization: `Bearer ${tokenValue}`,
        }
      );

      const { slug } = data.article;

      router.push(`/article/${slug}`);
    } catch (err) {
      console.error(err);
    }
  };

  const exitHandler = () => {
    console.log("hi");
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <WriteFormCard>
        <div className={user_write_container}>
          <div className={title_container}>
            <Input
              className={`${myStyle} ${title_input}`}
              id={"title"}
              type={"text"}
              placeholder={"Title"}
              value={inputState.title.value}
              onChange={inputHandler}
            />
          </div>
          <HashTag
            tagList={tagList}
            tagValue={tagValue}
            deleteHashTagHandler={deleteHashTagHandler}
            tagValueHandler={tagValueHandler}
            onKeyUpHandler={onKeyUpHandler}
            onKeyDownHandler={onKeyDownHandler}
          />
          <div className={description_container}>
            <Input
              id={"description"}
              className={`${myStyle} ${description_input}`}
              type={"text"}
              placeholder={"Description"}
              value={inputState.description.value}
              onChange={inputHandler}
            />
          </div>
        </div>

        <div className={write_and_preview_container}>
          <WriteForm
            bodyContent={bodyContent}
            bodyContentHandler={bodyContentHandler}
          />
          <MarkdownPreview source={bodyContent} />
        </div>
        <div className={button_container}>
          <button
            className={`${button} ${exit} ${myStyle}`}
            onClick={exitHandler}
          >
            나가기
          </button>
          <button
            className={`${button} ${submit} ${myStyle}`}
            onClick={postAritcleHandler}
          >
            제출하기
          </button>
        </div>
      </WriteFormCard>
    </>
  );
}
