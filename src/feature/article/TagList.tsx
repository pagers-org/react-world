import Label from "@/components/label/Label.tsx";

interface Props {
  tagList: string[];
}

const TagList = ({ tagList }: Props) => {
  return (
    <>
      {tagList.map((v, i) => (
        <Label key={`tag-${i}`} text={v} />
      ))}
    </>
  );
};
export default TagList;
