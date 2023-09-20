import Header from '@/components/Header';
import ReactQueryProviders from '@/lib/ReactQueryProviders';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import '../../public/styles/reset.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProviders>
          <Header />
          {children}
        </ReactQueryProviders>
      </body>
    </html>
  );
}
