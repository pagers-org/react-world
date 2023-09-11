import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts()],
  build: {
    // optional
    ssr: true,
    lib: {
      entry: "src/index.ts",
      name: "index",
      formats: ["es"],
    },

    rollupOptions: {
      external: ["react", "src/stories/*", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
