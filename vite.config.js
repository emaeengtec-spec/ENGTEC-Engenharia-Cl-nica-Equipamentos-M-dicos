import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/ENGTEC-Engenharia-Cl-nica-Equipamentos-M-dicos/' : '/',
}))
