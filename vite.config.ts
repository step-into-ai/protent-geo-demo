import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/protent-geo-demo/',
  plugins: [react()],
  server: {
    allowedHosts: ['.trycloudflare.com'],
  },
})
