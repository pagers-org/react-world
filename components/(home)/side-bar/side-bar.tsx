import { Tags } from "components/shared/ui/tags";

export const SideBar = () => {
  return (
    <div className="absolute left-[100%] top-[52px] pl-10">
      <div className="w-56 rounded-md bg-zinc-100 px-3 py-2">
        <p className="mb-3 text-base font-medium text-zinc-800">Popular Tags</p>

        <Tags.Root as="div">
          <Tags.Item as="a">tag</Tags.Item>
        </Tags.Root>
      </div>
    </div>
  );
};
