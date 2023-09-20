import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtecTedRoute(Component) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();
    const path = usePathname();
    console.log(path);
    const user =
      localStorage.getItem('user') &&
      JSON.parse(localStorage.getItem('user') as string);
    const userIsAuthenticated = !!user !== false;

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
