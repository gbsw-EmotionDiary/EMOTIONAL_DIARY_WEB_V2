import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ""),
        secure: false,
      },
    },
  },
  resolve: {
    alias: [
      { find: "@src", replacement: resolve(__dirname, "src") },
      { find: "@pages", replacement: resolve(__dirname, "src/pages") },
      { find: "@api", replacement: resolve(__dirname, "src/api") },
      { find: "@hooks", replacement: resolve(__dirname, "src/hooks") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      { find: "@assets", replacement: resolve(__dirname, "src/assets") },
      { find: "@imgs", replacement: resolve(__dirname, "src/assets/imgs") },
    ],
  },
});
