/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import path from 'path'
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'DataStructure',
      formats: ['es', 'umd'],
      fileName: (format) => `data-structure.${format}.js`
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})