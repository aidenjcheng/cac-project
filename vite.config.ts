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
    '/login': 'http://localhost:5000',
    '/api': 'http://localhost:5000',
    '/signup': 'http://localhost:5000',
    '/check_login': 'http://localhost:5000',
    '/upload': 'http://localhost:5000'
    }
  }
});