import { PropsWithChildren } from 'react';
import { Navbar } from '../components/NavBar';
import { Footer } from '../components/Footer';

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
