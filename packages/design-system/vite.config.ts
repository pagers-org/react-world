import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

//TODO : build설정 수정 필요
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "main",
      formats: ["es", "cjs"],
      fileName: "index",
    },
  },
});
