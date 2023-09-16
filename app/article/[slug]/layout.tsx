import type { PropsWithChildren, ReactNode } from "react";

type Props = {
  comments: ReactNode;
};

const ArticleLayout = ({ children, comments }: PropsWithChildren<Props>) => {
  return (
    <div className="flex justify-center">
      <div className="page relative">
        <div className="flex flex-col gap-12 py-20">
          {children}
          {comments}
        </div>
      </div>
    </div>
  );
};

export default ArticleLayout;
