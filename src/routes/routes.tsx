import {
  Navigate as BaseNavigate,
  Route as BaseRoute,
  Router as BaseRouter,
  Routes as BaseRoutes,
} from '@solidjs/router';
import { lazy } from 'solid-js';

export const Routes = () => (
  <BaseRouter>
    <BaseRoutes>
      <BaseRoute
        path="/"
        component={lazy(() =>
          import('./route-guard').then((module) => ({ default: module.RouteGuard })),
        )}
      >
        <BaseRoute path="/home" component={lazy(() => import('@/pages/home'))} />
        <BaseRoute path="/login" component={lazy(() => import('@/pages/login'))} />
        <BaseRoute path="/register" component={lazy(() => import('@/pages/register'))} />
        <BaseRoute path="/settings" component={lazy(() => import('@/pages/settings'))} />
        <BaseRoute path="/profile">
          <BaseRoute path="/:username">
            <BaseRoute path="/" component={lazy(() => import('@/pages/profile/[username]'))} />
            <BaseRoute
              path="/favorite"
              component={lazy(() => import('@/pages/profile/[username]/favorites'))}
            />
          </BaseRoute>
        </BaseRoute>
        <BaseRoute path="/article">
          <BaseRoute path="/:slug" component={lazy(() => import('@/pages/article/[slug]'))} />
        </BaseRoute>
        <BaseRoute path="/editor">
          <BaseRoute path="/" component={lazy(() => import('@/pages/editor'))} />
          <BaseRoute path="/:slug" component={lazy(() => import('@/pages/editor/[slug]'))} />
        </BaseRoute>
        <BaseRoute path="/*all" element={<BaseNavigate href="/home" />} />
      </BaseRoute>
    </BaseRoutes>
  </BaseRouter>
);
