import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
  },
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": "http://localhost:5010",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "__tests__/setup.js",
    coverage: {
      reporter: ["text", "html", "lcov"],
      all: true,
      include: ["/**/*.{js,ts,jsx,tsx}"],
      exclude: ["**/__tests__/**", "**/*.test.*"],
    },
  },
});
