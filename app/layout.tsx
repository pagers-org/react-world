import { Metadata } from 'next';
import { ReactNode } from 'react';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import '@/styles/globalStyles.css';
import Providers from '@/libs/Providers';

export const metadata: Metadata = {
  title: 'next world',
  description: 'next world by hyeon',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
