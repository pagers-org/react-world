import { ReactNode } from 'react';

import Header from '@/src/components/layout/Header';

import ReactQueryProvider from '@/src/lib/react-query/ReactQueryProvider';

import '@/src/styles/reset.css';
import './error.css';
import './loading.css';
import { AuthProvider } from '@/src/providers/AuthProvider';

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>
          <AuthProvider>
            <Header />
            <main>{children}</main>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
