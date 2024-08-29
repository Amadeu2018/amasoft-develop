import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
      loader: 'jsx', // Adicione essa linha para que o Vite entenda que você está usando JSX
    },
    // ... other config options ...
      main: './src/main.jsx', // Update the main file to point to main.jsx
})
