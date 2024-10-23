// https://vite.dev/config/
// vite.config.ts
import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

/*
export default defineConfig({
  plugins: [react()],
})
*/
