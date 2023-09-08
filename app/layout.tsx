'use client';

import { PropsWithChildren } from 'react';

import Header from '@/src/components/layout/Header';

import ReactQueryProviders from '@/src/lib/react-query/ReactQueryProviders';

import '@/src/styles/reset.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProviders>
          <Header />
          <main>{children}</main>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
