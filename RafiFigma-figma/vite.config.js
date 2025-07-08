// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tagger from '@dhiwise/component-tagger';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tagger()],
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@components': path.resolve('./src/components'),
      '@pages': path.resolve('./src/pages'),
      '@assets': path.resolve('./src/assets'),
      '@constants': path.resolve('./src/constants'),
      '@styles': path.resolve('./src/styles'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 4028,
    strictPort: true,
    allowedHosts: 'all', // 💥 This fixes Railway block error
  },
});
