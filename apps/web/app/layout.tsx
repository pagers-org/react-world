import type { Metadata } from "next";
import type { ReactNode } from "react";
import Providers from "../lib/providers";

export const metadata: Metadata = {
  title: "react world",
  description: "react world by min",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
