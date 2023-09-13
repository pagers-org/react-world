import { ReactNode } from 'react';

import Header from '@/src/components/layout/Header';

import ReactQueryProvider from '@/src/lib/react-query/ReactQueryProvider';

import '@/src/styles/reset.css';

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>
          <Header />
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
