import type { ReactNode } from "react";
import "./styles/main.css";
import "./styles/ionicons.min.css";
import Providers from "../lib/providers";
import { titillium } from "./styles/fonts";
import Gnb from "./components/gnb";
import Footer from "./components/footer";

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
