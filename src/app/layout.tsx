import Providers from '@/lib/Providers';
import './normalize.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'react world',
  description: 'react world by min',
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
