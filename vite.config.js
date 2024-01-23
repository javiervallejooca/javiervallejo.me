import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          chunk_react: ["react"],
        },
      },
    },
  },
});
