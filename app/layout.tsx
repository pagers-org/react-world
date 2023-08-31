'use client';

import { PropsWithChildren } from 'react';

import ReactQueryProviders from '@/src/lib/ReactQueryProviders';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProviders>{children}</ReactQueryProviders>
      </body>
    </html>
  );
}
