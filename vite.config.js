import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-gsap': ['gsap'],
          'vendor-motion': ['framer-motion'],
          'vendor-spline': ['@splinetool/react-spline', '@splinetool/runtime'],
        }
      }
    }
  }
})
