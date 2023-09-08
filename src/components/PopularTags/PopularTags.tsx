import {
  tag_container,
  popular_tag_text,
  tag,
} from "@/styles/popular_tags.css";
import { color_state } from "@/styles/container.css";

type tagListType = {
  tagLists: string[];
  selectTagHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export default function PopularTags({
  tagLists,
  selectTagHandler,
}: tagListType) {
  return (
    <>
      <div className={`${tag_container} ${color_state}`}>
        <div className={popular_tag_text}>
          <h3>Tags</h3>
        </div>
        <div>
          {tagLists.map((item, key) => {
            return (
              <div
                onClick={selectTagHandler}
                className={`${tag} ${color_state}`}
                key={key}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
