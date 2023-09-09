import { Tags } from "components/shared/ui/tags";

export const SideBar = () => {
  return (
    <div className="col-md-3">
      <div className="sidebar">
        <p>Popular Tags</p>

        <Tags.Root as="div">
          <Tags.Item as="a">tag</Tags.Item>
        </Tags.Root>
      </div>
    </div>
  );
};
