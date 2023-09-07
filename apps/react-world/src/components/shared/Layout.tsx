import { PropsWithChildren } from 'react';
import { Navbar } from './NavBar';
import { Footer } from './Footer';

type LayoutProps = PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
