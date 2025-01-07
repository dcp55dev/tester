import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  //base: '/',
  server: {
    port: 3030,
    host: true,
    proxy: {
      '/api' : {
        // target: 'http://localhost:5000',
        target: 'http://api:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
