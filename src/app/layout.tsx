import Providers from '@/lib/Providers';
import './normalize.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'react world',
  description: 'react world by min',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
