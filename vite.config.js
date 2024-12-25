import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/marketplace-flow-Demo/'  // Add this line - use your repo name
})