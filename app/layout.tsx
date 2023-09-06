'use client';

import Link from 'next/link';
import { PropsWithChildren } from 'react';

import { logo } from '@/app/layout.css';

import Header from '@/src/components/layout/Header';

import ReactQueryProviders from '@/src/lib/ReactQueryProviders';

import './reset.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProviders>
          <Header>
            <Header.Left>
              <Link className={logo} href="/">
                TECH
              </Link>
            </Header.Left>
            <Header.Right>
              <Link href="/">Home</Link>
              <Link href="/login">Sign in</Link>
              <Link href="/register">Sign up</Link>
            </Header.Right>
          </Header>
          <main>{children}</main>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
