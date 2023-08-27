import { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
