import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { NavBar } from 'components/layout/navbar';
import { Footer } from 'components/layout/footer';

import 'styles/normalize.css';
import 'styles/tailwind.css';

/** @todo tailwind css migration */
import 'styles/main.css';

export const metadata = {
  title: 'Real World',
  description: 'real world project',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
