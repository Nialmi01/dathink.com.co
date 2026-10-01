import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: isSsrBuild
    ? {}
    : {
        rollupOptions: {
          output: {
            // Separa el runtime de React y framer-motion del código propio:
            // el chunk de vendor se cachea entre despliegues y las rutas lazy
            // comparten esas dependencias en vez de duplicarlas.
            manualChunks: {
              react: ['react', 'react-dom', 'react-router', 'react-router-dom'],
              motion: ['framer-motion'],
            },
          },
        },
      },
}))
