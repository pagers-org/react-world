import Footer from '@/composables/Footer';
import Nav from '@/composables/Nav';
import { PropsWithChildren } from 'react';

import '@/styles/globals.css';

import {
  merriweatherSans,
  sourceSansPro,
  sourceSerif4,
  titilliumWeb,
} from './fonts';
import ReactQueryProviders from './providers';

const RootLayout = ({ children }: PropsWithChildren) => {
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
};

export default RootLayout;
