import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import Layout from '@/components/@common/Layout';
import HomePage from './HomePage';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Route>
    </ReactRouterRoutes>
  );
};

export default Routes;
