'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProtecTedRoute(Component) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();
    const path = usePathname();

    const IsAuthenticated = !!window.localStorage.getItem('user');

    useEffect(() => {
      if (IsAuthenticated && path === '/login') {
        router.push('/');
      }
      if (!IsAuthenticated && path === '/settings') {
        router.push('/login');
      }
    }, [IsAuthenticated, router, path]);

    return <Component {...props} />;
  };
}
