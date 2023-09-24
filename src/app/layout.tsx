import Footer from '@/composables/Footer';
import Nav from '@/composables/Nav';
import { ReactNode } from 'react';

import '@/styles/globals.css';

import {
  merriweatherSans,
  sourceSansPro,
  sourceSerif4,
  titilliumWeb,
} from './fonts';
import ReactQueryProviders from './providers';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body
        className={`${titilliumWeb.variable} ${sourceSerif4.variable} ${merriweatherSans.variable} ${sourceSansPro.variable}`}
      >
        <Nav />
        <ReactQueryProviders>{children}</ReactQueryProviders>
        <Footer />
      </body>
    </html>
  );
}
