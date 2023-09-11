import type { Metadata } from "next";
import { Inter } from "next/font/google";

import type { PropsWithChildren } from "react";

import { CommonLayout } from "components/shared/common-layout";
import { Providers } from "components/shared/providers";

import "styles/tailwind.css";

export const metadata: Metadata = {
  title: "Real World",
  description: "real world project",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={inter.variable}>
      <Providers>
        <CommonLayout>{children}</CommonLayout>
      </Providers>
    </html>
  );
};

export default RootLayout;
