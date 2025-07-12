import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { webcrypto } from 'crypto'
;(globalThis as any).crypto = webcrypto

// https://vite.dev/config/
export default defineConfig({
  build: { outDir: 'docs' },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  base: '/three.js/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
