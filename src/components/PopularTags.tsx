import { getTags } from "@/services/tags";
import { useQuery } from "@tanstack/react-query";
import PopularTagBtn from "./buttons/PopularTagBtn";

const PopularTags = () => {
  const { data: tags } = useQuery(["/api/tags"], () => getTags(), {
    refetchOnWindowFocus: false,
  });

  return (
    <div className="bg-gray-200 p-2">
      <h2 className="text-sm mb-1">Popular Tags</h2>
      {tags ? (
        <ul className="flex flex-wrap w-60 gap-1 ">
          {tags.map((tag) => (
            <PopularTagBtn key={tag}>{tag}</PopularTagBtn>
          ))}
        </ul>
      ) : (
        <p>Loading tags...</p>
      )}
    </div>
  );
};
export default PopularTags;
