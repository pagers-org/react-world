import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // 외부 접근을 허용합니다.
    cors: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@apis': '/src/apis',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@quries': '/src/quries',
      '@routes': '/src/routes',
      '@stores': '/src/stores',
      '@utils': '/src/utils',
      '@styles': '/styles',
      '@appTypes': '/src/types',
    },
  },
});
