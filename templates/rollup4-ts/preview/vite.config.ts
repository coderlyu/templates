import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'preview',
  plugins: [vue()],
  resolve: {
    alias: {
      '~': '/node_modules/'
    }
  }
})
