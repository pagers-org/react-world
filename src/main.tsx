import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Article from './pages/article';
import Login from './pages/Login';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/article/:id',
    element: <Article />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
