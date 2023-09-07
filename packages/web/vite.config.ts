import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      src: path.resolve("src/"),
    },
  },
  plugins: [react()],
});
