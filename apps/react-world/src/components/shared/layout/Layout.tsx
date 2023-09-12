import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Navbar } from './NavBar/NavBar';

type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
