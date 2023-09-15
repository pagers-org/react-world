import { Tags } from "components/shared/ui/tags";
import { tagRepository } from "repositories/tag";

export const runtime = "edge";

const TagsPage = async () => {
  const { tags } = await tagRepository.findAll();

  return (
    <Tags.Root as="div">
      {tags.map((tag) => (
        <Tags.Item key={tag} as="a">
          {tag}
        </Tags.Item>
      ))}
    </Tags.Root>
  );
};

export default TagsPage;
