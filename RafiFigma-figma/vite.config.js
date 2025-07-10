import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tagger from '@dhiwise/component-tagger'

export default defineConfig({
  plugins: [react(), tagger()],
  build: {
    outDir: 'build'
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@components': path.resolve('./src/components'),
      '@pages': path.resolve('./src/pages'),
      '@assets': path.resolve('./src/assets'),
      '@constants': path.resolve('./src/constants'),
      '@styles': path.resolve('./src/styles')
    }
  },
  server: {
    port: 4028,
    host: '0.0.0.0',
    strictPort: true
  },
  preview: {
    port: 4173,
    host: '0.0.0.0',
    strictPort: true,
    allowedHosts: [
      'nexro-production.up.railway.app',
      'www.nexromedia.com',
      'nexromedia.com',
      
    ]
  }
})
