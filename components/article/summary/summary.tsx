import { useMemo } from "react";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import { Tags } from "components/shared/ui/tags";
import { RelativeFormatter } from "lib/date-formatter/relative-formatter";
import type { RichArticle } from "models/article";

type Props = {
  article: Pick<RichArticle, "title" | "createdAt" | "tagList" | "description">;
};

export const Summary = ({ article }: Props) => {
  const { title, createdAt, tagList, description } = article;

  const relativeTime = useMemo(() => new RelativeFormatter(new Date()).format(createdAt), [createdAt]);

  return (
    <div>
      <h1 className="text-center text-5xl font-extrabold text-zinc-950">{title}</h1>

      <p className="mt-4 text-center text-base text-zinc-500">{relativeTime}</p>

      <Tags.Root className="mt-4 justify-center">
        {tagList.map((tag) => (
          <Tags.Item key={tag}>{tag}</Tags.Item>
        ))}
      </Tags.Root>

      <div className="mt-12 flex w-full gap-1 rounded-lg bg-zinc-900 px-5 py-4 shadow-2xl">
        <div>
          <RiDoubleQuotesL color="white" size={14} />
        </div>

        <p className="break-all text-sm font-normal text-white">{description}</p>

        <div>
          <RiDoubleQuotesR color="white" size={14} />
        </div>
      </div>
    </div>
  );
};
