
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves project sites under /<repo>/, but the dev server stays at /.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/My-Portfolio-Web/' : '/',
  plugins: [react(), tailwindcss()],
}))