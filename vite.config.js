import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/samplerswww/' : '/',
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  define: {
    __BASE_URL__: JSON.stringify(process.env.NODE_ENV === 'production' ? '/samplerswww/' : '/'),
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      BASE_URL: JSON.stringify(process.env.BASE_URL || '/'),
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure static assets are copied
    copyPublicDir: true
  }
}) 