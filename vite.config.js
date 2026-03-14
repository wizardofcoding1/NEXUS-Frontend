import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react(),tailwindcss()],
=======
  plugins: [react(),tailwindcss()],base: '/',
>>>>>>> e10146984f554d5728d7023b097f180da318ef21
})
