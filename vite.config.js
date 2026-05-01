import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Server proxy configuration
  server: {
    proxy: {
      '/api': { //if url starts with /api, redirect to this target
        target: 'http://localhost:3000'
      },
      './images': { //if url starts with /images, redirect to this target
        target: 'http://localhost:3000'
      }
    }
  },
  build: {
    outDir: '../ecommerce-backend/dist'
  }
})
