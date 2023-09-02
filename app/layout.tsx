import type { Metadata } from "next";

import type { PropsWithChildren } from "react";

import { Providers } from "lib/providers";

import "styles/normalize.css";
import "styles/tailwind.css";

export const metadata: Metadata = {
  title: "Real World",
  description: "real world project",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
};

export default RootLayout;
