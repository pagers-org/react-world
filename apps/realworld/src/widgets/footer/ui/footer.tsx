import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-16 mt-24 bg-gray500">
      <div className="flex items-center justify-center">
        <Link href="/" className="align-middle">
          <p className="text-green600">conduit</p>
        </Link>
        <span className="ml-10 text-xs font-light text-gray1100">
          An interactive learning project from
          <a className="text-green600" href="https://thinkster.io">
            Thinkster
          </a>
          . Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
