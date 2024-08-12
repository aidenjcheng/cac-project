import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      "/login": "http://10.244.92.142:8080/",
      "/api": "http://10.244.92.142:8080/",
      "/signup": "http://10.244.92.142:8080/",
      "/check_login": "http://10.244.92.142:8080/",
      "/upload": "http://10.244.92.142:8080/",
    },
  },
});
