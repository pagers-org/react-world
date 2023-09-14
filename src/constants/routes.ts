interface Route {
  name: string;
  href: string;
  nav: boolean;
}

interface Routes {
  HOME: Route;
  SIGNIN: Route;
  SIGNUP: Route;
  ARTICLEDETAIL: (slug: string) => Route;
  USERARTICLEPAGE: (userId: string) => Route;
}

export const ROUTES: Routes = {
  HOME: { name: 'Home', href: '/', nav: true },
  SIGNIN: { name: 'Sign in', href: '/login', nav: true },
  SIGNUP: { name: 'Sign up', href: '/register', nav: true },
  ARTICLEDETAIL: (slug: string) => ({
    name: 'Detail',
    href: `/detail/${slug}`,
    nav: false,
  }),
  USERARTICLEPAGE: (userId: string) => ({
    name: 'User Article',
    href: `/user/${userId}`,
    nav: false,
  }),
} as const;
