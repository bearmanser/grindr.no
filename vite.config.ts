import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This exposes the server on your network
    port: 3000,       // Optional: specify a custom port if needed
  },
})
