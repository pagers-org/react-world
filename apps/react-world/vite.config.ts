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
      '@/apis': '/src/apis',
      '@/apis/*': '/src/apis/*',
      '@/components': '/src/components',
      '@/components/*': '/src/components/*',
      '@/hooks': '/src/hooks',
      '@/hooks/*': '/src/hooks/*',
      '@/pages': '/src/pages',
      '@/pages/*': '/src/pages/*',
      '@/quries': '/src/quries',
      '@/quries/*': '/src/quries/*',
      '@/routes': '/src/routes',
      '@/routes/*': '/src/routes/*',
      '@/stores': '/src/stores',
      '@/stores/*': '/src/stores/*',
      '@/utils': '/src/utils',
      '@/utils/*': '/src/utils/*',
      '@/styles': '/styles',
      '@/styles/*': '/styles/*',
      '@/app-types': '/src/types',
      '@/app-types/*': '/src/types/*',
      '@/constants': '/src/constants',
      '@/constants/*': '/src/constants/*',
    },
  },
});
