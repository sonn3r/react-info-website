import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-info-website/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
