import { Metadata } from 'next';
import { ReactNode } from 'react';
import './normalize.css';
import Header from '@/components/layouts/Header';
import Providers from '@/libs/Providers';

export const metadata: Metadata = {
  title: 'next world',
  description: 'next world by hyeon',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <Providers>
        <body>
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
