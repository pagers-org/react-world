import { Metadata } from 'next';
import { ReactNode } from 'react';
import './normalize.css';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export const metadata: Metadata = {
  title: 'next world',
  description: 'next world by hyeon',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
