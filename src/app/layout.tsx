import '@/styles/globals.css';

import { NavBar } from './layout/NavBar';
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
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
