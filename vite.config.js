import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Use relative base for flexible deployment
  build: {
    outDir: 'dist',
  }
})
