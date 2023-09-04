import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // 외부 접근을 허용합니다.
    cors: true,
  },
  plugins: [react()],
});
