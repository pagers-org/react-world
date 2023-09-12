import { AppRouterContext, AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import React from 'react';

import * as mockRouter from 'next-router-mock';

const useRouter = mockRouter.useRouter;
export const MockNextNavigation = {
  ...mockRouter,
  notFound: jest.fn(),
  redirect: jest.fn().mockImplementation((url: string) => {
    mockRouter.memoryRouter.setCurrentUrl(url);
  }),
  usePathname: () => {
    const router = useRouter();
    return router.asPath;
  },
  useSearchParams: () => {
    const router = useRouter();
    const path = router.query;
    return new URLSearchParams(path as any);
  },
};
export type AppRouterContextProviderMockProps = {
  router?: Partial<AppRouterInstance>;
  children: React.ReactNode;
};

export const AppRouterContextProviderMock = ({
  router,
  children,
}: AppRouterContextProviderMockProps): React.ReactNode => {
  const mockedRouter: AppRouterInstance = {
    back: jest.fn(),
    forward: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
    ...router,
  };
  return <AppRouterContext.Provider value={mockedRouter}>{children}</AppRouterContext.Provider>;
};
