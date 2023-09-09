import { ReactNode } from 'react';
import { Navbar } from './NavBar';
import { Footer } from './Footer';

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
