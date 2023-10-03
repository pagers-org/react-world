import '@/styles/globals.css';

import Link from 'next/link';

import {
  controlButton,
  headControllers,
  navBar,
  titleBanner,
} from './layout.css';
import { themeClass } from './style.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={themeClass}>
        <main>
          <nav className={navBar}>
            <h1 className={titleBanner}>
              <Link href="/">Conduit</Link>
            </h1>
            <ul className={headControllers}>
              <li className={controlButton}>Home</li>
              <li className={controlButton}>New Article</li>
              <li className={controlButton}>Setting</li>
              <li className={controlButton}>Profile</li>
            </ul>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
