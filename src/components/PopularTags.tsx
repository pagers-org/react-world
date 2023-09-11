"use client";
import { getTags } from "@/services/tags";
import { useQuery } from "@tanstack/react-query";
import PopularTagBtn from "./buttons/PopularTagBtn";
import { Dispatch, SetStateAction } from "react";

interface Props {
  selectedTag?: string;
  setSelectedTag: Dispatch<SetStateAction<string | undefined>>;
}

const PopularTags = ({ selectedTag, setSelectedTag }: Props) => {
  const { data: tags } = useQuery(["/api/tags"], () => getTags(), {
    refetchOnWindowFocus: false,
  });

  const handleSelectTag = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <div className="bg-gray-200 p-2">
      <h2 className="text-sm mb-1">Popular Tags</h2>
      {tags ? (
        <ul className="flex flex-wrap w-60 gap-1 ">
          {tags.map((tag) => (
            <PopularTagBtn selected={selectedTag === tag} key={tag} onClick={() => handleSelectTag(tag)}>
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
