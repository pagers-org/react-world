'use client';

import { responsiveWidth } from '@/shared/css/responsive-width';
import { PathBuilder, RoutePath } from '@/shared/utils/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { isActiveLink } from '../../api/isActiveLink';
import useGetUser from '@/entities/user/api/useGetUser';
import { Avatar } from '@packages/ui';

const GNB = () => {
  const pathname = usePathname();
  const { isLogin, user } = useGetUser();

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
          {isLogin ? (
            <>
              <li>
                <Link data-testid="gnbEditor" href={PathBuilder.buildNewArticle().getPath()} className="no-underline">
                  <p className={`hover:text-black ${activeLinkStyle('/editor')}`}>New Article</p>
                </Link>
              </li>
              <li>
                <Link data-testid="gnbSettings" href={PathBuilder.buildSettings().getPath()} className="no-underline">
                  <p className={`hover:text-black ${activeLinkStyle('/settings')}`}>Settings</p>
                </Link>
              </li>
              <li>
                <Link data-testid="gnbUser" href={PathBuilder.buildUser().getPath()} className="no-underline">
                  <p className={`flex items-center gap-4 hover:text-black ${activeLinkStyle('/user')}`}>
                    <Avatar size="xxs" src={user.image} />
                    {user.username}
                  </p>
                </Link>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default GNB;
