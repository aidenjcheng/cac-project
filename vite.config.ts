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
      "/login": "https://stingray-app-7i9ac.ondigitalocean.app/",
      "/api": "https://stingray-app-7i9ac.ondigitalocean.app/",
      "/signup": "https://stingray-app-7i9ac.ondigitalocean.app/",
      "/check_login": "https://stingray-app-7i9ac.ondigitalocean.app/",
      "/upload": "https://stingray-app-7i9ac.ondigitalocean.app/",
    },
  },
});
