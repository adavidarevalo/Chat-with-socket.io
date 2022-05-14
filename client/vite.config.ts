import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  publicDir: resolve('./public'),
  plugins: [react()],
})
