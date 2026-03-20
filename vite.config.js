import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 4000,
    strictPort: true,
    allowedHosts: 'all',
    cors: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split heavy vendor libs into separate cacheable chunks
          'vendor-react':    ['react', 'react-dom', 'react-router-dom'],
          'vendor-firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          'vendor-ui':       ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
