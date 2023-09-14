import { defineConfig } from 'orval';

export default defineConfig({
  petstore: {
    output: {
      target: './src/api/endpoints',
      schemas: './src/api/models',
      mock: true,
      mode: 'tags-split',
      override: {
        mutator: {
          path: './src/api/mutator/custom-instance.ts',
          name: 'customInstance',
        },
      },
    },
    input: {
      target: './src/api/datas/realworld.json',
    },
  },
});
