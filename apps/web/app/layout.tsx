import type { ReactNode } from "react";
import "./_styles/main.css";
import "./_styles/ionicons.min.css";
import Providers from "../lib/providers";
import { titillium } from "./_styles/fonts";
import Gnb from "./_components/gnb";
import Footer from "./_components/footer";

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html className={titillium.className} lang="ko">
      <Providers>
        <body>
          <Gnb />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
