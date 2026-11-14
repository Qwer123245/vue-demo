import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
base: '/vue-demo/',
  plugins: [vue()],
  resolve: {
    alias: {
      // 让 '@/store/cart' 指向 src/store/cart
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
