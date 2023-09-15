import type { ReactNode } from "react";

import { Banner } from "components/(home)/banner";

type Props = {
  feed: ReactNode;
  tags: ReactNode;
};

const HomeLayout = ({ feed, tags }: Props) => {
  return (
    <>
      <Banner />

      <div className="flex justify-center">
        <div className="page relative">
          <div className="pt-4">{feed}</div>

          {tags}
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
