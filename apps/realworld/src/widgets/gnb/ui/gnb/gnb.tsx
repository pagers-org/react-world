'use client';

import { responsiveWidth } from '@/shared/css/responsive-width';
import { PathBuilder, RoutePath } from '@/shared/utils/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { isActiveLink } from '../../api/isActiveLink';

const GNB = () => {
  const pathname = usePathname();
  const activeLinkStyle = (path: RoutePath) => {
    return isActiveLink(pathname, path) ? 'text-black' : 'text-black/30';
  };

  return (
    <nav className="flex items-center justify-center w-full h-56">
      <div className={`flex justify-between ${responsiveWidth}`}>
        <Link data-testid="gnbLogo" href={PathBuilder.buildHome().getPath()} className="no-underline">
          <p className="text-2xl font-bold text-green600">conduit</p>
        </Link>
        <ul className="flex gap-16">
          <li>
            <Link data-testid="gnbHome" href={PathBuilder.buildHome().getPath()} className="no-underline">
              <p className={`hover:text-black ${activeLinkStyle('/')}`}>Home</p>
            </Link>
          </li>
          <li>
            <Link data-testid="gnbSignIn" href={PathBuilder.buildLogin().getPath()} className="no-underline">
              <p className={`hover:text-black ${activeLinkStyle('/login')}`}>Sign in</p>
            </Link>
          </li>
          <li>
            <Link data-testid="gnbSignUp" href={PathBuilder.buildRegister().getPath()} className="no-underline">
              <p className={`hover:text-black ${activeLinkStyle('/register')}`}>Sign up</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default GNB;
