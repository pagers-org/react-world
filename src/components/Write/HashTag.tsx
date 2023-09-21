import {
  tagList_container,
  tag,
  hash_tag,
  tag_and_input_container,
} from "@/styles/user_write.css";

import { myStyle } from "@/styles/container.css";

type HashTagType = {
  tagList: string[];
  deleteHashTagHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
  tagValue: string;
  tagValueHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUpHandler: (e: React.KeyboardEvent) => void;
  onKeyDownHandler: (e: React.KeyboardEvent) => void;
};

export default function HashTag({
  tagList,
  deleteHashTagHandler,
  tagValue,
  tagValueHandler,
  onKeyUpHandler,
  onKeyDownHandler,
}: HashTagType) {
  return (
    <>
      <div className={`${tag_and_input_container} ${myStyle}`}>
        {tagList.length > 0 &&
          tagList.map((hashTag, key) => {
            return (
              <div
                className={`${hash_tag} ${myStyle}`}
                onClick={deleteHashTagHandler}
                key={key}
              >
                {hashTag}
              </div>
            );
          })}
        <input
          type="text"
          id="tag"
          className={`${tagList_container} ${tag} ${myStyle}`}
          placeholder={"태그를 입력하세요 (최대 5개까지 가능해요!)"}
          value={tagValue}
          onChange={tagValueHandler}
          onKeyUp={onKeyUpHandler}
          onKeyDown={onKeyDownHandler}
          autoComplete={"off"}
        />
      </div>
    </>
  );
}
