import { Outlet } from '@solidjs/router';
import { GlobalLayout } from '@/layouts';
import { getTransitionType } from './routes.utils';

export const RouteGuard = () => {
  return (
    <GlobalLayout animate={getTransitionType().animate}>
      <Outlet />
    </GlobalLayout>
  );
};
