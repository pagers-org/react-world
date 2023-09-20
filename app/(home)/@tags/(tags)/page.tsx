import { ArticleTags } from "components/(home)/@tags/article-tags/article-tags";
import { tagRepository } from "repositories/tag";

export const runtime = "edge";

const TagsPage = async () => {
  const { tags } = await tagRepository.findAll();

  return <ArticleTags tags={tags} />;
};

export default TagsPage;
