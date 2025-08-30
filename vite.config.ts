import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  base:'/EveDoescher-portfolio/', // Nome do seu repositório
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    port: 3000,
  },
})
