import { useState } from "react";

export const useHashTag = () => {
  const [tagValue, setTagValue] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);

  const tagValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trim();

    if (value.includes(",")) {
      value = value.split(",").join("");
    }

    setTagValue(value);
  };

  const onKeyUpHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();

      let value = (e.currentTarget as HTMLInputElement).value;
      if (value.startsWith("#")) {
        value = value.slice(1);
      }

      if (value.length === 0) {
        return;
      }

      setTagList((prevTags) => {
        if (prevTags.length >= 5) {
          return prevTags;
        }
        return [...new Set([...prevTags, value])];
      });

      setTagValue("");
      return;
    }
  };

  const onKeyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Backspace") {
      let currentInputValue = (e.currentTarget as HTMLInputElement).value;
      if (currentInputValue.length === 0 && tagList.length > 0) {
        e.preventDefault();
        setTagList((prevTags) => {
          return prevTags.slice(0, -1);
        });
      }
    }
  };

  const deleteHashTagHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const tagToRemove = e.currentTarget.textContent;

    setTagList((prevTags) => {
      return prevTags.filter((tag) => tag !== tagToRemove);
    });
  };

  return {
    tagValue,
    tagList,
    tagValueHandler,
    onKeyUpHandler,
    onKeyDownHandler,
    deleteHashTagHandler,
  };
};
