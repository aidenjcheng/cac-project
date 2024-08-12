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
      "/login": "https://plankton-app-gl2gf.ondigitalocean.app/", // Use HTTPS
      "/api": "https://plankton-app-gl2gf.ondigitalocean.app/", // Use HTTPS
      "/signup": "https://plankton-app-gl2gf.ondigitalocean.app/", // Use HTTPS
      "/check_login": "https://plankton-app-gl2gf.ondigitalocean.app/", // Use HTTPS
      "/upload": "https://plankton-app-gl2gf.ondigitalocean.app/", // Use HTTPS
    },
  },
});
