import { defineConfig } from 'orval';

export default defineConfig({
  realworld: {
    output: {
      mode: 'tags-split',
      target: 'src/shared/api/realworld/endpoints',
      schemas: 'src/shared/api/realworld/models',
      client: 'react-query',
      prettier: true,
      clean: true,
      mock: true,
      override: {
        mutator: {
          path: 'src/shared/api/realworld/axios/axiosInstance.ts',
          name: 'axiosInstance',
        },
      },
    },
    input: {
      target: './realworld.json',
    },
  },
});
