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
      "/login": "https://cac-project-l5nu9.ondigitalocean.app/",
      "/api": "https://cac-project-l5nu9.ondigitalocean.app/",
      "/signup": "https://cac-project-l5nu9.ondigitalocean.app/",
      "/check_login": "https://cac-project-l5nu9.ondigitalocean.app/",
      "/upload": "https://cac-project-l5nu9.ondigitalocean.app/",
    },
  },
});
