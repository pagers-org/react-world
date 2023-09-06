'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const GNB = () => {
  const pathname = usePathname();

  console.log('pathname', pathname);

  return (
    <nav className="w-full h-56 flex justify-center items-center">
      <div
        className="w-full flex justify-between 
        max-w-940
        max-tablet:max-w-720
        max-mobile:max-w-554"
      >
        <Link data-testid="gnbLogo" href={'/'} className="no-underline ">
          <p className="font-bold text-2xl text-green600">conduit</p>
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
