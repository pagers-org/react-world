import type { PropsWithChildren } from "react";

import { Footer } from "../footer";
import { Header } from "../header";

export const CommonLayout = ({ children }: PropsWithChildren) => {
  return (
    <body>
      <div className="relative min-h-[100vh]">
        <Header />
        <div className="pb-14 pt-10">{children}</div>
        <Footer />
      </div>
    </body>
  );
};
