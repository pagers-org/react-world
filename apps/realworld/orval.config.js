import { defineConfig } from "orval";

export default defineConfig({
  myproject: {
    output: {
      mode: "single",
      target: "src/shared/api/realworld/apis.ts",
      schemas: "src/shared/api/realworld/models",
      client: "react-query",
      prettier: true,
      clean: true,
    },
    input: {
      target: "./realworld.json",
    },
  },
});
