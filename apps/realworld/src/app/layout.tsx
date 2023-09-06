import { GNB } from '@/widgets/GNB';
import './main.css';
import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <GNB />
        {children}
        <footer className="bg-gray500 mt-24 py-16 absolute bottom-0 w-full">
          <div className="flex justify-center items-center">
            <Link href="/" className="align-middle">
              <p className="text-green600">conduit</p>
            </Link>
            <span className="font-light text-gray1100 ml-10 text-xs">
              An interactive learning project from
              <a className="text-green600" href="https://thinkster.io">
                Thinkster
              </a>
              . Code &amp; design licensed under MIT.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
