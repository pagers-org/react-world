import '@/styles/globals.css';

import {
  merriweatherSans,
  sourceSansPro,
  sourceSerif4,
  titilliumWeb,
} from './fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`${titilliumWeb.variable} ${sourceSerif4.variable} ${merriweatherSans.variable} ${sourceSansPro.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
