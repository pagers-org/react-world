'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProtecTedRoute(Component) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();
    const path = usePathname();
    const [user, setUser] = useState<string | null>();

    const userIsAuthenticated = !!user !== false;

    useEffect(() => {
      setUser(window.localStorage.getItem('user'));
    }, []);

    useEffect(() => {
      if (userIsAuthenticated && path === '/login') {
        router.push('/');
      }
      if (!userIsAuthenticated && path === '/settings') {
        router.push('/login');
      }
    }, [userIsAuthenticated, router, path]);

    return <Component {...props} />;
  };
}
