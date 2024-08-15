import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src/', import.meta.url)) },
    ]
  }
})
