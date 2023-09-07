import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import 'styles/normalize.css';
import 'styles/tailwind.css';

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
      <body>{children}</body>
    </html>
  );
}
