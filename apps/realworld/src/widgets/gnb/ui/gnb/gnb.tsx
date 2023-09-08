'use client';

import Link from 'next/link';
import React from 'react';

const GNB = () => {
  return (
    <nav className="flex items-center justify-center w-full h-56">
      <div className="flex justify-between w-full max-w-1140 max-desktop:max-w-940 max-tablet:max-w-720 max-mobile-l:max-w-576">
        <Link data-testid="gnbLogo" href={'/'} className="no-underline ">
          <p className="text-2xl font-bold text-green600">conduit</p>
        </Link>
        <ul className="flex gap-16">
          <li>
            <Link data-testid="gnbHome" href={'/'} className="no-underline">
              <p className="text-black">Home</p>
            </Link>
          </li>
          <li>
            <Link data-testid="gnbSignIn" href={'/sign-in'} className="no-underline">
              <p className="text-black">Sign in</p>
            </Link>
          </li>
          <li>
            <Link data-testid="gnbSignUp" href={'/sign-up'} className="no-underline">
              <p className="text-black">Sign up</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default GNB;
