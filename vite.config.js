import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "assets",
    publicDir: "./assets"
  },
  plugins: [react()],
  base: '/'
})
