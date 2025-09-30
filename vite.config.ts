import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Adicione estas opções para melhor suporte ao JSX/TSX
      jsxRuntime: 'automatic',
    }),
  ],
  // Adicione esta configuração para resolver aliases
  resolve: {
    alias: {
      // Isso ajuda a resolver imports relativos
    },
  },
})
