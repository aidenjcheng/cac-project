import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      "/login": "http://localhost:8080",
      "/api": "http://localhost:8080",
      "/signup": "http://localhost:8080",
      "/check_login": "http://localhost:8080",
      "/upload": "http://localhost:8080",
    },
  },
});
