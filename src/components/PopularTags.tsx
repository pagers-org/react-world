"use client";
import { getTags } from "@/services/tags";
import { useQuery } from "@tanstack/react-query";
import PopularTagBtn from "./buttons/PopularTagBtn";
import { useTabsStore, useArticlesParamsStore } from "@/stores/useStore";

const PopularTags = () => {
  const { data: tags } = useQuery(["/api/tags"], () => getTags(), {
    refetchOnWindowFocus: false,
  });
  const {
    articlesParams: { tag: selectedTag },
    setSelectedTag,
    resetCurrentPage,
  } = useArticlesParamsStore();
  const { setActiveTab } = useTabsStore();

  const handleClickPopularTag = (tag: string) => {
    setSelectedTag(tag);
    setActiveTab(tag);
    resetCurrentPage();
  };

  return (
    <div className="bg-gray-200 p-2">
      <h2 className="text-sm mb-1">Popular Tags</h2>
      {tags ? (
        <ul className="flex flex-wrap w-60 gap-1 ">
          {tags.map((tag) => (
            <PopularTagBtn selected={selectedTag === tag} key={tag} onClick={() => handleClickPopularTag(tag)}>
              {tag}
            </PopularTagBtn>
          ))}
        </ul>
      ) : (
        <p>Loading tags...</p>
      )}
    </div>
  );
};
export default PopularTags;
