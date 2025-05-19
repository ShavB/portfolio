import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": "http://localhost:5010", // your backend dev URL
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "__tests__/setup.js", // or your setup file
    coverage: {
      reporter: ["text", "html", "lcov"], // output formats
      all: true, // include untested files
      include: ["/**/*.{js,ts,jsx,tsx}"], // adjust if needed
      exclude: ["**/__tests__/**", "**/*.test.*"], // exclude tests
    },
  },
});
