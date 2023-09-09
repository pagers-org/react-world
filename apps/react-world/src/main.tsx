import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './routes';
import '/styles/main.css';
import { Global } from '@emotion/react';
import globalStyles from '../styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Routes />
  </React.StrictMode>,
);
