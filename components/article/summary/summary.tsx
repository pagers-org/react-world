import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import { Tags } from "components/shared/ui/tags";

export const Summary = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-extrabold text-zinc-950">How to build webapps that scale</h1>

      <p className="mt-4 text-center text-base text-zinc-500">9 months ago</p>

      <Tags.Root className="mt-4 justify-center">
        <Tags.Item>realworld</Tags.Item>
        <Tags.Item>implementations</Tags.Item>
      </Tags.Root>

      <div className="mt-12 flex w-full gap-1 rounded-lg bg-zinc-900 px-5 py-4 shadow-2xl">
        <div>
          <RiDoubleQuotesL color="white" size={14} />
        </div>

        <p className="break-all text-sm font-normal text-white">This is the description for the post.</p>

        <div>
          <RiDoubleQuotesR color="white" size={14} />
        </div>
      </div>
    </div>
  );
};
