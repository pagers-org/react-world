import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";

import type { PropsWithChildren } from "react";

import { Footer } from "components/shared/footer";
import { Header } from "components/shared/header";
import { Providers } from "components/shared/providers";

import "styles/main.css";
import "styles/ionicons.min.css";
import "styles/tailwind.css";

export const metadata: Metadata = {
  title: "Real World",
  description: "real world project",
};

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: "400",
  variable: "--titillium-web-font",
});

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={titillium.variable}>
      <Providers>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
};

export default RootLayout;
