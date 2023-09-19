'use client';

import { responsiveWidth } from '@/shared/css/responsive-width';
import { PathBuilder } from '@/shared/utils/routes';
import Link from 'next/link';
import React from 'react';

const GNB = () => {
  return (
    <nav className="flex items-center justify-center w-full h-56">
      <div className={`flex justify-between ${responsiveWidth}`}>
        <Link data-testid="gnbLogo" href={PathBuilder.buildHome().getPath()} className="no-underline ">
          <p className="text-2xl font-bold text-green600">conduit</p>
        </Link>
        <ul className="flex gap-16">
          <li>
            <Link data-testid="gnbHome" href={PathBuilder.buildHome().getPath()} className="no-underline">
              <p className="text-black">Home</p>
            </Link>
          </li>
          <li>
            <Link data-testid="gnbSignIn" href={PathBuilder.buildLogin().getPath()} className="no-underline">
              <p className="text-black">Sign in</p>
            </Link>
          </li>
          <li>
            <Link data-testid="gnbSignUp" href={PathBuilder.buildRegister().getPath()} className="no-underline">
              <p className="text-black">Sign up</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default GNB;
