"use client";

import { Tags } from "components/shared/ui/tags";
import { INITIAL_PAGE } from "constants/articles";
import { useQueryParams } from "hooks/use-query-params";

type Props = {
  tags: string[];
};

export const ArticleTags = ({ tags }: Props) => {
  const { append } = useQueryParams();

  return (
    <Tags.Root as="div">
      {tags.map((tag) => (
        <Tags.Item key={tag} onClick={() => append({ tag, page: INITIAL_PAGE })}>
          {tag}
        </Tags.Item>
      ))}
    </Tags.Root>
  );
};
