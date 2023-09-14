// import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  plugins: [react()],
});
